import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    userType: {
        type: String,
        enum: ['student', 'professor', 'parent'],
        required: true
    },
    username: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
},
    {
        timestamps: true
    }


);

const User = mongoose.model('Users', userSchema);

export default User;
