// models/Class.js
import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  schedule: { type: Date, required: true },
  assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }],
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
  guestSessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GuestSession' }],
  support: { type: String }, // support link or info
  // other class details...
});

const Class = mongoose.models.Class || mongoose.model('Class', classSchema);

export default Class;
