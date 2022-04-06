import mongoose from "mongoose";
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    dateDiscipline: {
        type: Date,
        required: true,
    },

    nameDiscipline: {
        ref: 'discipline',
        type: Schema.Types.ObjectId
    },

    nameTeacher: {
        ref: 'teacher',
        type: Schema.Types.ObjectId
    }

});

const Schedule = mongoose.model("Schedule", scheduleSchema);
export { Schedule };