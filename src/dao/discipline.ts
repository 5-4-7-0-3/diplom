import { Discipline } from "../db/models/discipline";

class DisciplineDAO {
    createDiscipline(nameDiscipline: string, nameGroup:string, numberOfHours: number) {
        return new Discipline({
            nameDiscipline,
            nameGroup,
            numberOfHours,
        }).save();
    }

    findOneDiscipline(id: string) {
        return Discipline.findById(id).populate({ path: "nameGroup", select: "nameGroup" });
    }

    findDiscipline(){
        return Discipline.find().populate({ path: "nameGroup", select: "nameGroup" });
    }

    updateDiscipline(id: string, nameDiscipline: string, nameGroup: string, numberOfHours: number){
        return Discipline.findOneAndUpdate(
            { _id: id },
            {
              $set: {nameDiscipline, nameGroup, numberOfHours}
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