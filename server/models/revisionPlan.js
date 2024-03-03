// need update ( add other attributes : tests, courses, exercise, etc )
import mongoose from 'mongoose';

const revisionPlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['bac', 'fac'], // to change later 
        required: true
    },
    studentsEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
},
    {
        timestamps: true
    }
);

const RevisionPlan = mongoose.model('RevisionPlan', revisionPlanSchema);
export default RevisionPlan;
