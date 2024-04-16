import mongoose from 'mongoose';
import User from './user.js';

const studentSchema = new mongoose.Schema({
    studentClass: {
        type: String,
        enum: ['bac', 'fac'], // to change later 
        required: true
    },
    planEnrolledIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RevisionPlans'
    }

});

const Student = User.discriminator('Students', studentSchema);

export default Student;
