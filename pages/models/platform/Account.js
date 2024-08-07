import mongoose from 'mongoose';
const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  resume: {
    type: String, 
    default: null,
  },
  locationPreference: {
    type: String, 
    default: null,
  },
  courseOpted: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    default: null,
  },
  paymentInfo: {
    method: {
      type: String, 
      default: null,
    },
    status: {
      type: String, 
      default: null,
    },
  },
});

const Account = mongoose.models.Account || mongoose.model('Account', accountSchema);

export default Account;
