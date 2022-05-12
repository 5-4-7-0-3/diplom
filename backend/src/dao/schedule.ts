import { Schedule } from "../db/models/schedule";

class ScheduleDAO {
    createSchedule( date: Date, nameGroups: string, nameDisciplines: string, timeInterval: string, teacher: string) {
        return new Schedule({
            date,
            nameGroups,
            nameDisciplines,
            timeInterval,
            teacher
        }).save();
    }

    findOneSchedule(id: string) {
        return Schedule.findById(id)
        .populate({ path: "nameGroups", select: "nameGroups" })
        .populate({ path: "nameDisciplines", select: "nameDisciplines" })
        .populate({ path: "timeInterval", select: ["numberCouple", "timeInterval"] })
        .populate({ path: "teacher", select: ["name", "surname"] });
    }

    findSchedule(){
        return Schedule.find()
        .populate({ path: "nameGroups", select: "nameGroups" })
        .populate({ path: "nameDisciplines", select: "nameDisciplines" })
        .populate({ path: "timeInterval", select: ["numberCouple", "timeInterval"] })
        .populate({ path: "teacher", select: ["name", "surname"] });
    }

    updateSchedule(id: string, date: Date, nameGroups: string, nameDisciplines: string, timeInterval: string, teacher: string){
        return Schedule.findOneAndUpdate(
            { _id: id },
            {
              $set: {
                        date,
                        nameGroups,
                        nameDisciplines,
                        timeInterval,
                        teacher
                    }
            },
            { new: true }
          );
    }

    deleteSchedule(id: string){
        return Schedule.deleteOne({ _id: id })
    }

}

const scheduleDAO = new ScheduleDAO()

export { scheduleDAO }
