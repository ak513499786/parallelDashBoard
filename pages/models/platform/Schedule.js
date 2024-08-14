import mongoose from 'mongoose';
const { Schema, Types } = mongoose;
const { ObjectId } = Types;

const scheduleSchema = new mongoose.Schema({
  //_id: ObjectId,
  date: Date,
  title: String,
  startTime: String,
  endTime: String,
  time: String,
  day: String,
  user: { type: ObjectId, ref: 'User' },
  class: { type: ObjectId, ref: 'Class' }
});

export default mongoose.models.Schedule || mongoose.model('Schedule', scheduleSchema);
