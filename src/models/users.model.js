import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    user: { type: String, required: true },
    transaction: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    }],
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('User', User)
