import { createRouter } from 'next-connect';
import { connect } from '../../../lib/db';
import Video from '../../../models/platform/Video';
import upload from '../../../utils/multerConfig';

connect();

const handler = createRouter();

handler.use(upload.single('video'));


handler.get(async (req, res) => {
  try {
    const { classId } = req.query; 

    console.log("thisis the classID", classId);

    if (!classId) {
      return res.status(400).json({ success: false, error: 'Class ID is required' });
    }

    const videos = await Video.find({ Class: classId });

    if (!videos || videos.length === 0) {
      return res.status(404).json({ success: false, error: 'No videos found for this class' });
    }

    res.status(200).json({ success: true, data: videos });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});



handler.post(async (req, res) => {
  try {
    const { id } = req.query;
    const { title, description, duration } = req.body;
    const filePath = req.file.path;

    if (!title || !filePath) {
      return res.status(400).json({ success: false, error: 'Title and video file are required' });
    }

    const classData = await Class.findById(id);
    if (!classData) {
      return res.status(404).json({ success: false, error: 'Class not found' });
    }

    const newVideo = new Video({
      title,
      description,
      url: filePath,
      duration,
      classId: id
    });

    const savedVideo = await newVideo.save();

    classData.videos.push(savedVideo._id);
    await classData.save();

    res.status(201).json({ success: true, data: savedVideo });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

export default handler.handler();
