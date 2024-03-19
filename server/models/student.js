import mongoose from 'mongoose';
import User from './user.js';

const studentSchema = new mongoose.Schema({
    // In JavaScript, class is a reserved keyword.
    // While you can still use it as a property name, it's generally not recommended due to potential conflicts. To avoid any issues, you should rename it to something else,
    // like studentClass 👩‍🏫
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
