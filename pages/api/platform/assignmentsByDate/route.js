import {connect} from '../../../lib/db';
import Assignment from '../../../models/platform/Assignment';

export default async function handler(req, res) {
  await connect();

  if (req.method === 'GET') {
    try {
      const { date } = req.query;
      
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);

      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);

      const assignments = await Assignment.find({
        date: { $gte: startOfDay, $lte: endOfDay }
      });

      res.status(200).json({ success: true, data: assignments });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
