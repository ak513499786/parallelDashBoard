import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;


const classSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  description: String,
  assignments: [{ type: ObjectId, ref: 'Assignment' }],
  schedules: [{ type: ObjectId, ref: 'Schedule' }],
  modules: [{ type: ObjectId, ref: 'Module' }],
  supportSection: { type: ObjectId, ref: 'SupportSection' },
  guestSessions: [{ type: ObjectId, ref: 'GuestSession' }]
})


export default mongoose.models.Class || mongoose.model('Class', classSchema);
