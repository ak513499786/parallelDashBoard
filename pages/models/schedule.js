import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  date:{
    type: String,

  },
  time:{
    type: String,
  },
  heading :{
    type: String,
  },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },

});


const schedule = mongoose.models.scheduleSchema || mongoose.model('schedule', scheduleSchema);

export default schedule;
