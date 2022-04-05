class ScheduleController {
    
    scheduleService: any;
    constructor(scheduleService: any) {
        this.scheduleService = scheduleService;
    }

    async createSchedule(req: any, res: any) {
        const { nameGroup, dateDiscipline, nameDiscipline, nameTeacher } = req.body;
        const newSchedule = await this.scheduleService.createSchedule( nameGroup, dateDiscipline, nameDiscipline, nameTeacher );
        res.json(newSchedule);
    }

    async findOneSchedule(req: any, res: any) {
        const OneSchedule = await this.scheduleService.findOneSchedule(
            req.params.id
        );
        res.json(OneSchedule);
    }

    async findSchedule(req: any, res: any) {
        const discipline = await this.scheduleService.findSchedule();
        res.json(discipline);
    }

    async updateSchedule(req: any, res: any) {
        const { nameGroup, dateDiscipline, nameDiscipline, nameTeacher } = req.body;
        const updateSchedule = await this.scheduleService.updateSchedule(
            req.params.id,
            nameGroup,
            dateDiscipline,
            nameDiscipline,
            nameTeacher
        );
        res.json(updateSchedule);
    }

    async deleteSchedule(req: any, res: any) {
        const deleteSchedule = await this.scheduleService.deleteSchedule(
            req.params.id
        );
            if(deleteSchedule.deletedCount > 0){
                res.json(deleteSchedule);
            } else res.json({ message: "Не вдалось видалити." })
                
    }
}

export { ScheduleController };