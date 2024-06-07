import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    sede: {
        type: String,
        required: true
    },
    ruc: {
        type: String,
        required: true
    },
})

export default mongoose.model("schools", schoolSchema);