import mongoose from 'mongoose';
import User from './user.js';

const professorSchema = new mongoose.Schema({
    department: {
        type: String,
        required: true
    },
});

const Professor = User.discriminator('Professor', professorSchema);

export default Professor;
