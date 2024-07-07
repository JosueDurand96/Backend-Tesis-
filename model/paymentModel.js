import mongoose from "mongoose";

const paySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    total: {
        type: String,
        required: true
    },
})

export default mongoose.model("payment", paySchema);