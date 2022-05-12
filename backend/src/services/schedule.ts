class ScheduleService {
    scheduleDAO: any;
    constructor(scheduleDAO:any) {
        this.scheduleDAO = scheduleDAO;
    }

    createSchedule(date: Date, nameGroups: string, nameDisciplines: string, timeInterval: string, teacher: string) {
        return this.scheduleDAO.createSchedule(date, nameGroups, nameDisciplines, timeInterval, teacher);
    }

    findOneSchedule(id: string) {
        return this.scheduleDAO.findOneSchedule(id);
    }

    findSchedule() {
        return this.scheduleDAO.findSchedule();
    }

    updateSchedule(id: string, date: Date, nameGroups: string, nameDisciplines: string, timeInterval: string, teacher: string) {
        return this.scheduleDAO.updateSchedule(id, date, nameGroups, nameDisciplines, timeInterval, teacher);
    }

    deleteSchedule(id: string) {
        return this.scheduleDAO.deleteSchedule(id);
    }
}
export { ScheduleService };
