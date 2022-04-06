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

    nameDiscipline: {
        ref: 'discipline',
        type: [Schema.Types.ObjectId]
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

const Teacher = mongoose.model("teacher", teacherSchema);
export { Teacher };