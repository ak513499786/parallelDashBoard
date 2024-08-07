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
    const { date } = req.query;
    let classObj;

    if (date) {
      classObj = await Assignment.find({ date: new Date(date) });
      
      if (!classObj || classObj.length === 0) {
        return res.status(404).json({ success: false, message: 'No data available for the given date' });
      }
    } else {
      classObj = await Assignment.find({});
    }

    res.status(200).json({ success: true, data: classObj });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
  break;



    case 'POST':
      try {
        const { id, ...assignmentData } = req.body;
        
        console.log("Assignment data:", assignmentData);
    
        if (typeof assignmentData !== 'object' || assignmentData === null) {
          throw new Error('Invalid assignment data format');
        }
    
        const assignment = await Assignment.create(assignmentData);
    
        console.log('Created assignment:', assignment);
    
        res.status(201).json({ success: true, data: assignment });
      } catch (error) {
        console.error('Error creating assignment:', error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(400).json({ success: false, message: 'Invalid request method' });
      break;
  }
}