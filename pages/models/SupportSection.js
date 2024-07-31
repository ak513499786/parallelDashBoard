import mongoose from 'mongoose';

const supportSchema = new mongoose.Schema({
    _id: ObjectId,
    description: String,
    contactInfo: String,
    class: { type: ObjectId, ref: 'Class' }
  });

export default mongoose.models.supportSchema || mongoose.model('SupportSection', supportSchema);
