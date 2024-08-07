import nextConnect from 'next-connect';
import multer from 'multer';
import path from 'path';
import fs from 'fs-extra';
import {connect} from '../../../lib/db';
import mongoose from 'mongoose';
import Grid from 'gridfs-stream';

const uploadDir = path.join(process.cwd(), 'public', 'uploads');
fs.ensureDirSync(uploadDir);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('video'));

apiRoute.post(async (req, res) => {
  await connect();
  
  const conn = mongoose.connection;
  let gfs;

  conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('videos');
  });

  const { file } = req;
  
  if (!file) {
    return res.status(400).json({ error: 'Please upload a file' });
  }

  console.log(`File saved locally at: ${file.path}`);

  const writeStream = gfs.createWriteStream({
    filename: file.filename,
    contentType: file.mimetype,
  });

  fs.createReadStream(file.path).pipe(writeStream);

  writeStream.on('close', function (savedFile) {
    res.status(201).json({ 
      message: 'File uploaded successfully',
      localPath: file.path,
      mongoId: savedFile._id
    });
  });


  writeStream.on('error', (error) => {
    fs.unlinkSync(file.path);
    res.status(500).json({ error: 'An error occurred during file upload to MongoDB' });
  });
});



apiRoute.get(async (req, res) => {
  const { filename } = req.query;
  if (!filename) {
    return res.status(400).json({ error: 'Filename is required' });
  }

  const filePath = path.join(uploadDir, filename);

  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize-1;
      const chunksize = (end-start)+1;
      const file = fs.createReadStream(filePath, {start, end});
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(200, head);
      fs.createReadStream(filePath).pipe(res);
    }
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};