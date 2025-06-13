import mongoose from 'mongoose';

const { Schema } = mongoose;

const Category = new Schema({
    _id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    transaction: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Category', Category)
