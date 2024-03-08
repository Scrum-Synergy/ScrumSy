import mongoose from 'mongoose';
import User from './user.js';

const parentSchema = new mongoose.Schema({
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

const Parent = User.discriminator('Parents', parentSchema);

export default Parent;
