import mongoose from 'mongoose';
import User from './user.js';

const professorSchema = new mongoose.Schema({
    department: {
        type: String,
    },
});

const Professor = User.discriminator('Professors', professorSchema);

export default Professor;
