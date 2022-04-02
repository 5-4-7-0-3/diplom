class DisciplineController {
    
    disciplineService: any;
    constructor(disciplineService: any) {
        this.disciplineService = disciplineService;
    }

    async createDiscipline(req: any, res: any) {
        const { nameDiscipline, nameTeacher } = req.body;
        const newDiscipline = await this.disciplineService.createDiscipline( nameDiscipline, nameTeacher );
        res.json(newDiscipline);
    }

    async findOneDiscipline(req: any, res: any) {
        const OneDiscipline = await this.disciplineService.findOneDiscipline(
            req.params.id
        );
        res.json(OneDiscipline);
    }

    async findDiscipline(req: any, res: any) {
        const discipline = await this.disciplineService.findDiscipline();
        res.json(discipline);
    }

    async updateDiscipline(req: any, res: any) {
        const { nameDiscipline, nameTeacher } = req.body;
        const updateDiscipline = await this.disciplineService.updateDiscipline(
            req.params.id,
            nameDiscipline, 
            nameTeacher
        );
        res.json(updateDiscipline);
    }

    async deleteDiscipline(req: any, res: any) {
        const deleteDiscipline = await this.disciplineService.deleteDiscipline(
            req.params.id
        );
            if(deleteDiscipline.deletedCount > 0){
                res.json(deleteDiscipline);
            } else res.json({ message: "Не вдалось видалити." })
                
    }
}

export { DisciplineController };