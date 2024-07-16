import mongoose from "mongoose"
const forgotSchema = new mongoose.Schema({
  userid: {
    type: String,
    

  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    
  },
  password:{
    type: String,
    required: true,

  },
  token :{
    type: String,
    required: true,

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.User || mongoose.model("Forgot", forgotSchema);

export default User;