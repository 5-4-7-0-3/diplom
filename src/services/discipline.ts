class DisciplineService {
    disciplinesDAO: any;
    constructor(disciplinesDAO:any) {
        this.disciplinesDAO = disciplinesDAO;
    }

    createDiscipline(nameDisciplines: string ) {
        return this.disciplinesDAO.createDiscipline(nameDisciplines);
    }

    findOneDiscipline(id: string) {
        return this.disciplinesDAO.findOneDiscipline(id);
    }

    findDisciplines() {
        return this.disciplinesDAO.findDisciplines();
    }

    updateDiscipline(id: string, nameDisciplines: string ) {
        return this.disciplinesDAO.updateDiscipline(id, nameDisciplines);
    }

    deleteDiscipline(id: string) {
        return this.disciplinesDAO.deleteDiscipline(id);
    }
}
export { DisciplineService };
