class WorkingHoursService {
    workingHoursDAO: any;
    constructor(workingHoursDAO:any) {
        this.workingHoursDAO = workingHoursDAO;
    }

    createWorkingHours(nameGroups: string, nameDisciplines: string, workingHours: number) {
        return this.workingHoursDAO.createWorkingHours(nameGroups, nameDisciplines, workingHours);
    }

    findOneWorkingHours(id: string) {
        return this.workingHoursDAO.findOneWorkingHours(id);
    }

    findWorkingHours() {
        return this.workingHoursDAO.findWorkingHours();
    }

    updateWorkingHours(id: string, nameGroups: string, nameDisciplines: string, workingHours: number) {
        return this.workingHoursDAO.updateWorkingHours(id, nameGroups, nameDisciplines, workingHours);
    }

    deleteWorkingHours(id: string) {
        return this.workingHoursDAO.deleteWorkingHours(id);
    }
}
export { WorkingHoursService };
