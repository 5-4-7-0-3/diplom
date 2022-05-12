import express from 'express';
class TeacherOrientationController {

    teacherOrientationService: any;
    constructor(teacherOrientationService: any) {
        this.teacherOrientationService = teacherOrientationService;
    }

    async createTeacherOrientation(req: express.Request, res: express.Response) {
        const { nameTeacher, nameDisciplines } = req.body;
        const newTeacherOrientation = await this.teacherOrientationService.createTeacherOrientation(
            nameTeacher,
            nameDisciplines
            );
        res.json(newTeacherOrientation);
    }

    async findOneTeacherOrientation(req: express.Request, res: express.Response) {
        const oneTeacherOrientation = await this.teacherOrientationService.findOneTeacherOrientation(
            req.params.id
        );
        res.json(oneTeacherOrientation);
    }

    async findTeacherOrientation(req: express.Request, res: express.Response) {
        const TeacherOrientations = await this.teacherOrientationService.findTeacherOrientation();
        res.json(TeacherOrientations);
    }

    async updateTeacherOrientation(req: express.Request, res: express.Response) {
        const { nameTeacher, nameDisciplines } = req.body;
        const updateTeacherOrientation = await this.teacherOrientationService.updateTeacherOrientation(
            req.params.id,
            nameTeacher,
            nameDisciplines
        );
        res.json(updateTeacherOrientation);
    }

    async deleteTeacherOrientation(req: express.Request, res: express.Response) {
        const deleteTeacherOrientation = await this.teacherOrientationService.deleteTeacherOrientation(
            req.params.id
        );
            if(deleteTeacherOrientation.deletedCount > 0){
                res.json(deleteTeacherOrientation);
            } else res.json({ message: "Не вдалось видалити." })

    }
}

export { TeacherOrientationController };
