import mongoose from "mongoose";
const Schema = mongoose.Schema;

const teacherOrientation = new Schema({
    nameTeacher: {
        ref: 'teachers',
        type: [Schema.Types.ObjectId]
    },

    nameDisciplines: {
        ref: 'disciplines',
        type: [Schema.Types.ObjectId]
    },
});

const TeacherOrientation = mongoose.model("teacherOrientation", teacherOrientation);
export { TeacherOrientation };
