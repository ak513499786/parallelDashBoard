import mongoose from 'mongoose';

const kycSchema = new mongoose.Schema({
  panNumber: { type: String, required: true },
  panPhoto: { type: String, required: true },
  passportPhoto: { type: String, required: true },
  
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }

}, 
{ timestamps: true });

const Kyc = mongoose.models.kycSchema || mongoose.model('Kyc', kycSchema);

export default Kyc;