import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    required: true
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
});

module.exports = mongoose.models.User || mongoose.model('users', userSchema);
