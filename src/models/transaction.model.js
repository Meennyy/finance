import mongoose from 'mongoose';

const { Schema } = mongoose;

const Transaction = new Schema({
    _id: { type: String, required: true, unique: true },
    user: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, required: true, enum: ['income', 'expense'] },
    category: { type: String, ref: 'Category', required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

export default mongoose.model('Transaction', Transaction)
