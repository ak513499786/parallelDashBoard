import mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  title: { type: String, required: true },
  content: { type: String }
}, { timestamps: true });

export default mongoose.models.Module || mongoose.model('Module', moduleSchema);
