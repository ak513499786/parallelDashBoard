import mongoose from 'mongoose';

const moduleSchema = new mongoose.Schema({
  _id: ObjectId,
  title: String,
  description: String,
  videoLinks: [{
    title: String,
    url: String
  }],
  class: { type: ObjectId, ref: 'Class' }
});

export default mongoose.models.Module || mongoose.model('Module', moduleSchema);
