import { TeacherOrientation } from "../db/models/teacherOrientation";

class TeacherOrientationDAO {
    createTeacherOrientation(nameTeacher: string, nameDisciplines: string) {
        return new TeacherOrientation({
            nameTeacher,
            nameDisciplines
        }).save();
    }

    findOneTeacherOrientation(id: string) {
        return TeacherOrientation.findById(id)
        .populate({ path: "nameTeacher", select: ["name", "surname"] })
        .populate({ path: "nameDisciplines", select: "nameDisciplines" });
    }

    findTeacherOrientation(){
        return TeacherOrientation.find()
        .populate({ path: "nameTeacher", select: ["name", "surname"] })
        .populate({ path: "nameDisciplines", select: "nameDisciplines" });
    }

    updateTeacherOrientation(id: string, nameTeacher: string, nameDisciplines: string){
        return TeacherOrientation.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                    nameTeacher,
                    nameDisciplines
                 }
        },
        { new: true }
        );
        }

    deleteTeacherOrientation(id: string){
        return TeacherOrientation.deleteOne({ _id: id });
    }
}

const teacherOrientationDAO = new TeacherOrientationDAO()

export { teacherOrientationDAO }
