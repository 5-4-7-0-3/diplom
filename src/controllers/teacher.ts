class TeachersController {
    
    teachersService: any;
    findTeacher: any;
    constructor(teachersService: any) {
        this.teachersService = teachersService;
    }

    async createTeacher(req: any, res: any) {
        const {  nameTeacher, surname, login, password, nameDiscipline } = req.body;
        const role: string = "user";
        const healthStatus: string = "healthy";
        const newTeacher = await this.teachersService.createTeacher( nameTeacher, surname, login, password, nameDiscipline, healthStatus, role );
        res.json(newTeacher);
    }

    async findOneTeacher(req: any, res: any) {
        const OneTeacher = await this.teachersService.findOneTeacher(
            req.params.id
        );
        res.json(OneTeacher);
    }

    async findTeachers(req: any, res: any) {
        const teacher = await this.teachersService.findTeachers();
        res.json(teacher);
    }

    async updateTeacher(req: any, res: any) {
        const { nameTeacher, surname, login, password, nameDiscipline, healthStatus, role } = req.body;
        const updateTeacher = await this.teachersService.updateTeacher(
            req.params.id,
            nameTeacher, 
            surname, 
            login, 
            password, 
            nameDiscipline, 
            healthStatus, 
            role
        );
        res.json(updateTeacher);
    }

    async deleteTeacher(req: any, res: any) {
        const deleteTeacher = await this.teachersService.deleteTeacher(
            req.params.id
        );
            if(deleteTeacher.deletedCount > 0){
                res.json(deleteTeacher);
            } else res.json({ message: "Не вдалось видалити." })
            
                
    }
}

export { TeachersController };