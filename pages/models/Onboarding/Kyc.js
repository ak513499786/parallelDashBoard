import mongoose from 'mongoose';

const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const kycSchema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  panNumber: { type: String, required: true },
  panPhoto: { type: String, required: true },
  passportPhoto: { type: String, required: true }
});

export default mongoose.models.Kyc || mongoose.model('Kyc', kycSchema);
