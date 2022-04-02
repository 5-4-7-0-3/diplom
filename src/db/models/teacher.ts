import mongoose from "mongoose";
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    nameTeacher: {
        type: String,
        required: true,
    },

    surname: {
        type: String,
        required: true,
    },

    login: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    discipline: {
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

const Teacher = mongoose.model("teachers", teacherSchema);
export { Teacher };