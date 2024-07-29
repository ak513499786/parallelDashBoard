import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String }
}, { timestamps: true });


export default mongoose.models.Class || mongoose.model('Class', classSchema);
