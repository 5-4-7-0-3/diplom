import { Discipline } from "../db/models/disciplines";

class DisciplineDAO {
    createDiscipline(nameDisciplines: string) {
        return new Discipline({
            nameDisciplines
        }).save();
    }

    findOneDiscipline(id: string) {
        return Discipline.findById(id);
    }

    findDisciplines(){
        return Discipline.find();
    }

    updateDiscipline(id: string, nameDisciplines: string){
        return Discipline.findOneAndUpdate(
            { _id: id },
            {
              $set: {
                nameDisciplines
                    }
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
