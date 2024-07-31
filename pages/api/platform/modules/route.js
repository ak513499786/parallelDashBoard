import {connect} from '../../../../lib/db';
import Class from '../../../models/Class';
import Module from '../../../models/Module';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connect();

  switch (method) {
    case 'GET':
      try {
        const classObj = await Class.findById(id).populate('modules');
        if (!classObj) {
          return res.status(404).json({ success: false, error: 'Class not found' });
        }
        res.status(200).json({ success: true, data: classObj.modules });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const module = await Module.create({ ...req.body, class: id });
        const updatedClass = await Class.findByIdAndUpdate(
          id,
          { $push: { modules: module._id } },
          { new: true }
        );
        res.status(201).json({ success: true, data: module });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}