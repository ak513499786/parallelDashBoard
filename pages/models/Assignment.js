import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  description: String,
  dueDate: Date,
  class: { type: ObjectId, ref: 'Class' }
});

export default mongoose.models.Assignment || mongoose.model('Assignment', assignmentSchema);
