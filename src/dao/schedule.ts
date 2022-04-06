import { Schedule } from "../db/models/schedule";

class ScheduleDAO {
    createSchedule( dateDiscipline: Date, nameDiscipline: string, nameTeacher: string) {
        return new Schedule({
            dateDiscipline, 
            nameDiscipline, 
            nameTeacher
        }).save();
    }

    findOneSchedule(id: string) {
        return Schedule.findById(id).populate({ path: "nameDiscipline", select: "nameDiscipline" })
        .populate({ path: "nameTeacher", select: "nameTeacher" });
    }

    findSchedule(){
        return Schedule.find().populate({ path: "nameDiscipline", select: ["nameDiscipline","nameGroup"] })
        .populate({ path: "nameTeacher", select: ["nameTeacher","surname","healthStatus"] });
    }

    updateSchedule(id: string, dateDiscipline: Date, nameDiscipline: string, nameTeacher: string){
        return Schedule.findOneAndUpdate(
            { _id: id },
            {
              $set: {
                     dateDiscipline,
                     nameDiscipline,
                     nameTeacher
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