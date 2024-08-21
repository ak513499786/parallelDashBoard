import mongoose from 'mongoose';
const { Schema } = mongoose;

const assignmentSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  submitAssignment: { type: String },
  dateAssign: { type: String },
  dateSubmitted: { type: String },
  date: { type: Date, required:true, index: true },  
  class: { type: Schema.Types.ObjectId, ref: 'Class' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.models.Assignment || mongoose.model('Assignment', assignmentSchema);
