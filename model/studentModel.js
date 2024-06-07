import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    id_parent: {
        type: String,
        required: true
    },
    id_worker: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    type_document: {
        type: String,
        required: true
    },
    number_document: {
        type: String,
        required: true
    },
    photo_frontal: {
        type: String,
        required: true
    },
})

export default mongoose.model("students", studentSchema);