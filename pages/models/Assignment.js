import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.models.Assignment || mongoose.model('Assignment', assignmentSchema);
