import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
    id_school: {
        type: String,
        required: true
    },
    work_position: {
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
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
})

export default mongoose.model("worker", workerSchema);