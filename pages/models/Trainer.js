
import mongoose from 'mongoose';

const TrainerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

export default mongoose.models.Trainer || mongoose.model('Trainer', TrainerSchema);
