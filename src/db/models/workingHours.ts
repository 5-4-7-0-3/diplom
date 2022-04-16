import mongoose from "mongoose";
const Schema = mongoose.Schema;

const workingHours = new Schema({
    nameGroups: {
        ref: 'groups',
        type: [Schema.Types.ObjectId]
    },

    nameDisciplines: {
        ref: 'disciplines',
        type: [Schema.Types.ObjectId]
    },

    workingHours: {
        type: Number,
        required: true,
    }
});

const WorkingHours = mongoose.model("workingHours", workingHours);
export { WorkingHours };
