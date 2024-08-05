import mongoose from 'mongoose';

const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const assignmentSchema = new Schema({
  _id: { type: ObjectId, auto: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  
  
  dueDate: { type: Date, required: true },
  class: { type: ObjectId, ref: 'Class', required: true }
});

export default mongoose.models.Assignment || mongoose.model('Assignment', assignmentSchema);
