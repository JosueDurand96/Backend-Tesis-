import mongoose from "mongoose";

const parentSchema = new mongoose.Schema({
    id_school: {
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
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    number_cellphone: {
        type: String,
        required: true
    },
    number_emergency: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

export default mongoose.model("parents", parentSchema);