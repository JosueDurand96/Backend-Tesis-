import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    image: {
        image: String,
        name: String
    }
})

export default mongoose.model("movie", movieSchema);