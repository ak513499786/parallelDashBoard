import { connect } from '../../../lib/db';
import User from '../../../models/userModel';
import Course from '../../../models/course';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  await connect();

  if (req.method === 'POST') {
    const { courseId } = req.body;
    const authHeader = req.headers.authorization;


    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization token is required' });
    }

    const token = authHeader.split(' ')[1];
    console.log("getting courseID", courseId);
    console.log("getting token", token);
    
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      const userId = decoded.id;
      console.log("userid", userId);

      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({ error: 'Course not found' });
      }

      user.selectedCourse = courseId;
      await user.save();

      res.status(200).json({ message: 'Course selected successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
