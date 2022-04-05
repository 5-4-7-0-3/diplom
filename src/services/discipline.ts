class DisciplineService {
    disciplineDAO: any;
    constructor(disciplineDAO:any) {
        this.disciplineDAO = disciplineDAO;
    }
    
    createDiscipline(nameDiscipline: string, nameTeacher: string, numberOfHours: number) {
        return this.disciplineDAO.createDiscipline(nameDiscipline, nameTeacher, numberOfHours);
    }

    findOneDiscipline(id: string) {
        return this.disciplineDAO.findOneDiscipline(id);
    }

    findDiscipline() {
        return this.disciplineDAO.findDiscipline();
    }

    updateDiscipline(id: string, nameDiscipline: string, nameTeacher: string, numberOfHours: number) {
        return this.disciplineDAO.updateDiscipline(id, nameDiscipline, nameTeacher, numberOfHours);
    }

    deleteDiscipline(id: string) {
        return this.disciplineDAO.deleteDiscipline(id);
    }
}
export { DisciplineService };