import mongoose from "mongoose";
const Schema = mongoose.Schema;

const disciplineSchema = new Schema({

    nameDiscipline: {
        type: String,
        required: true,
    },
    nameTeacher: {
        ref: 'Teacher',
        type: Schema.Types.ObjectId
    },
    numberOfHours: {
        type: Number,
        required: true,
    }
});

const Discipline = mongoose.model("disciplines", disciplineSchema);
export { Discipline };