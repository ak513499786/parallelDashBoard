// models/GuestSession.js
import mongoose from 'mongoose';

const guestSessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  meetLink: { type: String, required: true },
  // other guest session details...
});

const GuestSession = mongoose.models.GuestSession || mongoose.model('GuestSession', guestSessionSchema);

export default GuestSession;
