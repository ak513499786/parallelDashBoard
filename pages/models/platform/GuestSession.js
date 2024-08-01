// models/GuestSession.js
import mongoose from 'mongoose';

const guestSessionSchema = new mongoose.Schema({
  _id: ObjectId,
  guestName: String,
  topic: String,
  date: Date,
  class: { type: ObjectId, ref: 'Class' }
});

const GuestSession = mongoose.models.GuestSession || mongoose.model('GuestSession', guestSessionSchema);

export default GuestSession;
