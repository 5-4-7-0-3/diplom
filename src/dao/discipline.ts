import { Discipline } from "../db/models/discipline";

class DisciplineDAO {
    createDiscipline(nameDiscipline: string, nameTeacher: string) {
        return new Discipline({
            nameDiscipline,
            nameTeacher
        }).save();
    }

    findOneDiscipline(id: string) {
        return Discipline.findById(id);
    }

    findDiscipline(){
        return Discipline.find();
    }

    updateDiscipline(id: string, nameDiscipline: string, nameTeacher: string){
        return Discipline.findOneAndUpdate(
            { _id: id },
            {
              $set: {nameDiscipline, nameTeacher}
            },
            { new: true }
          );
    }

    deleteDiscipline(id: string){
        return Discipline.deleteOne({ _id: id })
    }
    
}

const disciplineDAO = new DisciplineDAO()

export { disciplineDAO }