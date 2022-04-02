import { Teacher } from "../db/models/teacher";

class TeacherDAO {
    createTeacher( nameTeacher:string, surname:string, login:string, password:string, discipline:string, healthStatus:string, role:string ) {
        return new Teacher({
            nameTeacher,
            surname,
            login,
            password,
            discipline,
            healthStatus, 
            role 
        }).save();
    }

    findOneTeacher(id: string) {
        return Teacher.findById(id);
    }

    findTeachers(){
        return Teacher.find();
    }

    updateTeacher(id: string, nameTeacher:string, surname:string, login:string, password:string, discipline:string, healthStatus:string, role:string ){
        return Teacher.findOneAndUpdate(
            { _id: id },
            {
              $set: {nameTeacher, surname, login, password, discipline, healthStatus, role}
            },
            { new: true }
          );
    }

    deleteTeacher(id: string){
        return Teacher.deleteOne({ _id: id })
    }
    
}

const teachersDAO = new TeacherDAO()

export { teachersDAO }