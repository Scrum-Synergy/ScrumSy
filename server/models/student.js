import mongoose from 'mongoose';
import User from './user.js';

const studentSchema = new mongoose.Schema({

    class: {
        type: String,
        enum: ['bac', 'fac'], // to change later 
        required: true
    },

});

const Student = User.discriminator('Student', studentSchema);

export default Student;
