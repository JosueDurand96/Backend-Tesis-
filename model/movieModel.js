import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
})

export default mongoose.model("movies", movieSchema);