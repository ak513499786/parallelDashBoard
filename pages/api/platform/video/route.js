import nextConnect from 'next-connect';
import multer from 'multer';
import { connect } from '../../../lib/db';
import Module from '../../../models/platform/Module';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public',
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Something went wrong: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  },
});

apiRoute.use(upload.single('video'));

apiRoute.post(async (req, res) => {
  await connect();
  
  const { moduleId } = req.body;
  const videoUrl = `/uploads/${req.file.filename}`;
  
  try {
    const updatedModule = await Module.findByIdAndUpdate(
      moduleId,
      { videoUrl },
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedModule });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, 
  },
};
