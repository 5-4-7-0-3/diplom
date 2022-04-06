class DisciplineService {
    disciplineDAO: any;
    constructor(disciplineDAO:any) {
        this.disciplineDAO = disciplineDAO;
    }
    
    createDiscipline(nameDiscipline: string, nameGroup:string, numberOfHours: number) {
        return this.disciplineDAO.createDiscipline(nameDiscipline, nameGroup, numberOfHours);
    }

    findOneDiscipline(id: string) {
        return this.disciplineDAO.findOneDiscipline(id);
    }

    findDiscipline() {
        return this.disciplineDAO.findDiscipline();
    }

    updateDiscipline(id: string, nameDiscipline: string, nameGroup:string, nameTeacher: string, numberOfHours: number) {
        return this.disciplineDAO.updateDiscipline(id, nameDiscipline, nameGroup, nameTeacher, numberOfHours);
    }

    deleteDiscipline(id: string) {
        return this.disciplineDAO.deleteDiscipline(id);
    }
}
export { DisciplineService };