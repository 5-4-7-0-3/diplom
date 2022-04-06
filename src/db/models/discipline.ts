import mongoose from "mongoose";
const Schema = mongoose.Schema;

const disciplineSchema = new Schema({

    nameDiscipline: {
        type: String,
        required: true,
    },

    nameGroup: {
        type: String,
        required: true,
    },

    numberOfHours: {
        type: Number,
        required: true,
    }
});

const Discipline = mongoose.model("discipline", disciplineSchema);
export { Discipline };