import { WorkingHours } from "../db/models/workingHours";

class WorkingHoursDAO {
    createWorkingHours(nameGroups: string, nameDisciplines: string, workingHours: number) {
        return new WorkingHours({
            nameGroups,
            nameDisciplines,
            workingHours
        }).save();
    }

    findOneWorkingHours(id: string) {
        return WorkingHours.findById(id)
        .populate({ path: "nameGroups", select: "nameGroups" })
        .populate({ path: "nameDisciplines", select: "nameDisciplines" });
    }

    findWorkingHours(){
        return WorkingHours.find()
        .populate({ path: "nameGroups", select: "nameGroups" })
        .populate({ path: "nameDisciplines", select: "nameDisciplines" });
    }

    updateWorkingHours(id: string, nameGroups: string, nameDisciplines: string, workingHours: number){
        return WorkingHours.findOneAndUpdate(
            { _id: id },
            {
              $set: {
                        nameGroups,
                        nameDisciplines,
                        workingHours
                    }
            },
            { new: true }
          );
    }

    deleteWorkingHours(id: string){
        return WorkingHours.deleteOne({ _id: id })
    }
}

const workingHoursDAO = new WorkingHoursDAO()

export { workingHoursDAO }
