class ScheduleService {
    scheduleDAO: any;
    constructor(scheduleDAO:any) {
        this.scheduleDAO = scheduleDAO;
    }
    
    createSchedule(nameGroup: string, couple: number, dateDiscipline: Date, nameDiscipline: string, nameTeacher: string) {
        return this.scheduleDAO.createSchedule(nameGroup, couple, dateDiscipline, nameDiscipline, nameTeacher);
    }

    findOneSchedule(id: string) {
        return this.scheduleDAO.findOneSchedule(id);
    }

    findSchedule() {
        return this.scheduleDAO.findSchedule();
    }

    updateSchedule(id: string, nameGroup: string, couple: number, dateDiscipline: Date, nameDiscipline: string, nameTeacher: string) {
        return this.scheduleDAO.updateSchedule(id, nameGroup, couple, dateDiscipline, nameDiscipline, nameTeacher);
    }

    deleteSchedule(id: string) {
        return this.scheduleDAO.deleteSchedule(id);
    }
}
export { ScheduleService };