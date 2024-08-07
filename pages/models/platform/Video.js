import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the video'],
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  fileId: {
    type: mongoose.Schema.Types.ObjectId,
    //required: [true, 'FileId is required'],
    ref: 'uploads.files'  
  },
  fileName: {
    type: String,
    required: [true, 'FileName is required']
  },
  duration: {
    type: Number,
    default: 0
  },
  format: {
    type: String,
    default: 'mp4'
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  uploader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Assuming you have a User model
    required: [true, 'Uploader is required']
  },
  tags: [{
    type: String,
    maxlength: [20, 'Tag cannot be more than 20 characters']
  }]
}, {
  timestamps: true
});

export default mongoose.models.Video || mongoose.model('Video', VideoSchema);
