import {connect} from '../../../lib/db';
import Class from '../../../models/platform/Class';
import Assignment from '../../../models/platform/Assignment';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case 'GET':
      try {
        const classObj = await Class.findById(id).populate('assignments');
        if (!classObj) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: classObj.assignments });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const assignment = await Assignment.create({ ...req.body, class: id });
        const updatedClass = await Class.findByIdAndUpdate(
          id,
          { $push: { assignments: assignment._id } },
          { new: true }
        );
        res.status(201).json({ success: true, data: assignment });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}