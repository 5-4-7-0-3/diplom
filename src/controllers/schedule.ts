import express from 'express';
class ScheduleController {
    
    scheduleService: any;
    constructor(scheduleService: any) {
        this.scheduleService = scheduleService;
    }

    async createSchedule(req: express.Request, res: express.Response) {
        const { dateDiscipline, nameDiscipline, nameTeacher } = req.body;
        const newSchedule = await this.scheduleService.createSchedule(  dateDiscipline, nameDiscipline, nameTeacher );
        res.json(newSchedule);
    }

    async findOneSchedule(req: express.Request, res: express.Response) {
        const OneSchedule = await this.scheduleService.findOneSchedule(
            req.params.id
        );
        res.json(OneSchedule);
    }

    async findSchedule(req: express.Request, res: express.Response) {
        const discipline = await this.scheduleService.findSchedule();
        res.json(discipline);
    }

    async updateSchedule(req: express.Request, res: express.Response) {
        const { dateDiscipline, nameDiscipline, nameTeacher } = req.body;
        const updateSchedule = await this.scheduleService.updateSchedule(
            req.params.id,
            dateDiscipline,
            nameDiscipline,
            nameTeacher
        );
        res.json(updateSchedule);
    }

    async deleteSchedule(req: express.Request, res: express.Response) {
        const deleteSchedule = await this.scheduleService.deleteSchedule(
            req.params.id
        );
            if(deleteSchedule.deletedCount > 0){
                res.json(deleteSchedule);
            } else res.json({ message: "Не вдалось видалити." })
                
    }
}

export { ScheduleController };