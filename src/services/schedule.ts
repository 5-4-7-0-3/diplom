class ScheduleService {
    scheduleDAO: any;
    constructor(scheduleDAO:any) {
        this.scheduleDAO = scheduleDAO;
    }
    
    createSchedule(dateDiscipline: Date, nameDiscipline: string, nameTeacher: string) {
        return this.scheduleDAO.createSchedule(dateDiscipline, nameDiscipline, nameTeacher);
    }

    findOneSchedule(id: string) {
        return this.scheduleDAO.findOneSchedule(id);
    }

    findSchedule() {
        return this.scheduleDAO.findSchedule();
    }

    updateSchedule(id: string, dateDiscipline: Date, nameDiscipline: string, nameTeacher: string) {
        return this.scheduleDAO.updateSchedule(id, dateDiscipline, nameDiscipline, nameTeacher);
    }

    deleteSchedule(id: string) {
        return this.scheduleDAO.deleteSchedule(id);
    }
}
export { ScheduleService };