import mongoose from "mongoose";

const deliveryPersonSchema = new mongoose.Schema({
    id_parent: {
        type: String,
        required: true
    },
    id_student: {
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
    photo_rigth: {
        type: String,
        required: true
    },
    photo_left: {
        type: String,
        required: true
    },
})

export default mongoose.model("delivery_persons", deliveryPersonSchema);