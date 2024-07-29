import mongoose from 'mongoose';

const academicsSchema = new mongoose.Schema({
  currentOccupation: { type: String, required: true },
  highestQualification: { type: String, required: true },
  branchOfDegree: { type: String, required: true },
  collegeName :{type: String, required: true},
  
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }

}, 
{ timestamps: true });

export default mongoose.models.academicsSchema || mongoose.model('Academics', academicsSchema);
