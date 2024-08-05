import mongoose from 'mongoose';
const { Schema } = mongoose;

const videoSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  url: { type: String, required: true },
  duration: Number
});

export default mongoose.models.Video || mongoose.model('Video', videoSchema);
