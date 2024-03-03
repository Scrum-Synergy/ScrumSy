import mongoose from 'mongoose';
import User from './user.js';

const parentSchema = new mongoose.Schema({
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

const Parent = User.discriminator('Parent', parentSchema);

export default Parent;
