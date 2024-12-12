import { Schema } from 'mongoose';
import mongoose from './mongoose';

const foodSchema = new mongoose.Schema({
    name: { typeof: String, required: true },
    description: { typeof: String, required: true },
    price: { typeof: Number, required: true },
    image: { typeof: String, required: true },
    category: { typeof: String, required: true },
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModel;