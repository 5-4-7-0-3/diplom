import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schedule = new Schema({
    date: {
        type: Date,
        required: true,
    },

    nameGroups: {
        ref: 'groups',
        type: [Schema.Types.ObjectId]
    },

    nameDisciplines: {
        ref: 'disciplines',
        type: [Schema.Types.ObjectId]
    },

    timeInterval: {
        ref: 'couple',
        type: [Schema.Types.ObjectId]
    },

    teacher: {
        ref: 'teachers',
        type: [Schema.Types.ObjectId]
    }
});

const Schedule = mongoose.model("schedule", schedule);
export { Schedule };
