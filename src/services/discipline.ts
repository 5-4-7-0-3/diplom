class DisciplineService {
    disciplineDAO: any;
    constructor(disciplineDAO:any) {
        this.disciplineDAO = disciplineDAO;
    }
    
    createDiscipline(nameDiscipline: string, nameTeacher: string) {
        return this.disciplineDAO.createDiscipline(nameDiscipline, nameTeacher);
    }

    findOneDiscipline(id: string) {
        return this.disciplineDAO.findOneDiscipline(id);
    }

    findDiscipline() {
        return this.disciplineDAO.findDiscipline();
    }

    updateDiscipline(id: string, nameDiscipline: string, nameTeacher: string) {
        return this.disciplineDAO.updateDiscipline(id, nameDiscipline, nameTeacher);
    }

    deleteDiscipline(id: string) {
        return this.disciplineDAO.deleteDiscipline(id);
    }
}
export { DisciplineService };