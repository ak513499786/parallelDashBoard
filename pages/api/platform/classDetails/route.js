import { connect } from '../../../lib/db';
import User from '../../../models/userModel';
import Class from '../../../models/class';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  await connect();

  if (req.method === 'GET') {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Authorization token is required' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      const userId = decoded.id;

      const user = await User.findById(userId).populate('selectedCourse');


      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      console.log("user found", user);

      
              

      if (!user) {
        return res.status(404).json({ error: 'Class details not found' });
      }

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}