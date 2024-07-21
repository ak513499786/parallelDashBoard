import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
  name: {
    type: String,

    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email address',
    ],
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,

  },
  name: {
    type: String,
    required: true,
    
  },
  phoneNumber: {
    type: String,
    required: true,

  },
  dateOfBirth: {
    type: String,
    required: true,

  },
  currentOccupation: {
    type: String,
    required: true,

  },
  highestQualification: {
    type: String,
    required: true,

  },
  branchOfDegree: {
    type: String,
    required: true,

  },
  collegeName: {
    type: String,
    required: true,

  },
  panNumber: {
    type: String,
    required: true,

  },
  panPhoto: {
    type: String,
    required: true,

  },
  passportPhoto: {
    type: String,
    required: true,

  },
  enrollCourse :{
    type: String,
    required: true,

  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  resetPasswordToken: String,
  resetPasswordExpiry: Date,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;