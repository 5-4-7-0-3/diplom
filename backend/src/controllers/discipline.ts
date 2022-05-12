import express from 'express';
class DisciplineController {

    disciplineService: any;
    constructor(disciplineService: any) {
        this.disciplineService = disciplineService;
    }

    async createDiscipline(req: express.Request, res: express.Response) {
        const { nameDisciplines } = req.body;
        const newDiscipline = await this.disciplineService.createDiscipline( nameDisciplines );
        res.json(newDiscipline);
    }

    async findOneDiscipline(req: express.Request, res: express.Response) {
        const oneDiscipline = await this.disciplineService.findOneDiscipline(
            req.params.id
        );
        res.json(oneDiscipline);
    }

    async findDisciplines(req: express.Request, res: express.Response) {
        const discipline = await this.disciplineService.findDisciplines();
        res.json(discipline);
    }

    async updateDiscipline(req: express.Request, res: express.Response) {
        const { nameDisciplines } = req.body;
        const updateDiscipline = await this.disciplineService.updateDiscipline(
            req.params.id,
            nameDisciplines
        );
        res.json(updateDiscipline);
    }

    async deleteDiscipline(req: express.Request, res: express.Response) {
        const deleteDiscipline = await this.disciplineService.deleteDiscipline(
            req.params.id
        );
            if(deleteDiscipline.deletedCount > 0){
                res.json(deleteDiscipline);
            } else res.json({ message: "Не вдалось видалити." })

    }
}

export { DisciplineController };
