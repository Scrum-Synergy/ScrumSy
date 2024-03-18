import mongoose from 'mongoose';

const revisionPlanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
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
        ref: 'Students'
    }],
    tests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tests'
    }],
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    }],
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercises'
    }],

},
    {
        timestamps: true
    }
);

const RevisionPlan = mongoose.model('RevisionPlans', revisionPlanSchema);
export default RevisionPlan;
