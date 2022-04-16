import express from 'express';
class WorkingHoursController {

    workingHoursService: any;
    constructor(workingHoursService: any) {
        this.workingHoursService = workingHoursService;
    }

    async createWorkingHours(req: express.Request, res: express.Response) {
        const { nameGroups, nameDisciplines, workingHours } = req.body;
        const newNameWorkingHours = await this.workingHoursService.createWorkingHours( nameGroups, nameDisciplines, workingHours );
        res.json(newNameWorkingHours);
    }

    async findOneWorkingHours(req: express.Request, res: express.Response) {
        const oneNameWorkingHours = await this.workingHoursService.findOneWorkingHours(
            req.params.id
        );
        res.json(oneNameWorkingHours);
    }

    async findWorkingHours(req: express.Request, res: express.Response) {
        const workingHours = await this.workingHoursService.findWorkingHours();
        res.json(workingHours);
    }

    async updateWorkingHours(req: express.Request, res: express.Response) {
        const { nameGroups, nameDisciplines, workingHours } = req.body;
        const updateWorkingHours = await this.workingHoursService.updateWorkingHours(
            req.params.id,
            nameGroups,
            nameDisciplines,
            workingHours
        );
        res.json(updateWorkingHours);
    }

    async deleteWorkingHours(req: express.Request, res: express.Response) {
        const deleteWorkingHours = await this.workingHoursService.deleteWorkingHours(
            req.params.id
        );
            if(deleteWorkingHours.deletedCount > 0){
                res.json(deleteWorkingHours);
            } else res.json({ message: "Не вдалось видалити." })

    }
}

export { WorkingHoursController };
