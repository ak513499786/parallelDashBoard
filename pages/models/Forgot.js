import mongoose from "mongoose"

const forgotPasswordSchema = new mongoose.Schema({
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
    

  },
  token :{
    type: String,
    required: true,

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
});

const forgot = mongoose.models.forgot || mongoose.model("Forgot", forgotPasswordSchema);

export default forgot;