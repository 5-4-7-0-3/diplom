import mongoose from "mongoose";
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    nameGroup: {
        ref: 'Groups',
        type: Schema.Types.ObjectId
    },    

    couple: {
        type: Number,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },

    nameDiscipline: {
        ref: 'Discipline',
        type: Schema.Types.ObjectId
    },

    nameTeacher: {
        ref: 'Teaacher',
        type: Schema.Types.ObjectId
    }

});

const Schedule = mongoose.model("Schedule", scheduleSchema);
export { Schedule };