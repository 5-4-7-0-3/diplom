import { Discipline } from "../db/models/discipline";

class DisciplineDAO {
    createDiscipline(nameDiscipline: string, nameTeacher: string, numberOfHours: number) {
        return new Discipline({
            nameDiscipline,
            nameTeacher,
            numberOfHours
        }).save();
    }

    findOneDiscipline(id: string) {
        return Discipline.findById(id);
    }

    findDiscipline(){
        return Discipline.find();
    }

    updateDiscipline(id: string, nameDiscipline: string, nameTeacher: string, numberOfHours: number){
        return Discipline.findOneAndUpdate(
            { _id: id },
            {
              $set: {nameDiscipline, nameTeacher, numberOfHours}
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