import mongoose from "mongoose";
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    surname: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    healthStatus: {
        type: String,
        required: true,
    },

    role:{
        type: String,
        required: true,
    }
});

const Teachers = mongoose.model("teachers", teacherSchema);
export { Teachers };
