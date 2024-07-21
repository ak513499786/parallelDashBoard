import mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },

});

const Module = mongoose.models.Module || mongoose.model('Module', moduleSchema);

export default Module;
