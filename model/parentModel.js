import mongoose from "mongoose";

const parentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    document_type: {
        type: String,
        required: true
    },
    document_number: {
        type: String,
        required: true
    },
})

export default mongoose.model("parent", parentSchema);