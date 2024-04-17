import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
},
    {
        timestamps: true
    }
);

const Request = mongoose.model('Requests', requestSchema);
export default Request;
