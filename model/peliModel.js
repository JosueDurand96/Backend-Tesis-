import mongoose from "mongoose";

const peliSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
})

export default mongoose.model("peli", peliSchema);