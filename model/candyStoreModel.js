import mongoose from "mongoose";

const candySchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cantidad: {
        type: String,
        required: true
    },
})

export default mongoose.model("candy", candySchema);