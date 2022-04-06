import { Teacher } from "../db/models/teacher";

class TeacherDAO {
    createTeacher( nameTeacher:string, surname:string, login:string, hashPassword:string, nameDiscipline:string, healthStatus:string, role:string ) {
        return new Teacher({
            nameTeacher,
            surname,
            login,
            password: hashPassword,
            nameDiscipline,
            healthStatus, 
            role 
        }).save();
    }

    findOneTeacher(id: string) {
        return Teacher.findById(id).populate({ path: "nameDiscipline", select: "nameDiscipline" });
    }

    findTeachers(){
        return Teacher.find().populate({ path: "nameDiscipline", select: "nameDiscipline" });
    }

    updateTeacher(id: string, nameTeacher:string, surname:string, login:string, password:string, nameDiscipline:string, healthStatus:string, role:string ){
        return Teacher.findOneAndUpdate(
            { _id: id },
            {
              $set: {nameTeacher, surname, login, password, nameDiscipline, healthStatus, role}
            },
            { new: true }
          );
    }

    deleteTeacher(id: string){
        return Teacher.deleteOne({ _id: id })
    }

    loginVerification(login: string) {
        return Teacher.findOne({ login: login })
    
    
      }
    
}

const teachersDAO = new TeacherDAO()

export { teachersDAO }