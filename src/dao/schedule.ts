import { Schedule } from "../db/models/schedule";

class ScheduleDAO {
    createSchedule(nameGroup: string, dateDiscipline: Date, nameDiscipline: string, nameTeacher: string) {
        console.log(nameGroup, dateDiscipline, nameDiscipline, nameTeacher);
        
        return new Schedule({
            nameGroup,
            dateDiscipline, 
            nameDiscipline, 
            nameTeacher
        }).save();
    }

    findOneSchedule(id: string) {
        return Schedule.findById(id);
    }

    findSchedule(){
        return Schedule.find();
    }

    updateSchedule(id: string, nameGroup: string, dateDiscipline: Date, nameDiscipline: string, nameTeacher: string){
        return Schedule.findOneAndUpdate(
            { _id: id },
            {
              $set: {
                     nameGroup,
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