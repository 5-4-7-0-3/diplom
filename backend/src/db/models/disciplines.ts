import mongoose from "mongoose";
const Schema = mongoose.Schema;

const disciplineSchema = new Schema({
    nameDisciplines: {
        type: String,
        required: true,
    }
});

const Discipline = mongoose.model("disciplines", disciplineSchema);
export { Discipline };
