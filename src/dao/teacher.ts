import { Teachers } from "../db/models/teacher";

class TeachersDAO {
    createTeacher( name:string, surname:string, email:string, hashPassword:string, healthStatus:string, role:string ) {
        return new Teachers({
            name,
            surname,
            email,
            password: hashPassword,
            healthStatus,
            role
        }).save();
    }

    findOneTeacher(id: string) {
        return Teachers.findById(id);
    }

    findTeachers(){
        return Teachers.find();
    }

    updateTeacher(id: string, name:string, surname:string, email:string, password:string, healthStatus:string, role:string ){
        return Teachers.findOneAndUpdate(
            { _id: id },
            {
              $set: {name, surname, email, password, healthStatus, role}
            },
            { new: true }
          );
    }

    deleteTeacher(id: string){
        return Teachers.deleteOne({ _id: id })
    }

    loginVerification(email: string) {
        return Teachers.findOne({ email: email })


      }

}

const teachersDAO = new TeachersDAO()

export { teachersDAO }
