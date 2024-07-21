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
    
  },
  phoneNumber: {
    type: String,

  },
  dateOfBirth: {
    type: String,

  },
  currentOccupation: {
    type: String,
    
  },
  highestQualification: {
    type: String,

  },
  branchOfDegree: {
    type: String,

  },
  collegeName: {
    type: String,

  },
  panNumber: {
    type: String,

  },
  panPhoto: {
    type: String,

  },
  passportPhoto: {
    type: String,

  },
  enrollCourse :{
    type: String,

  },
  selectedCourse: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },

  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  resetPasswordToken: String,
  resetPasswordExpiry: Date,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;