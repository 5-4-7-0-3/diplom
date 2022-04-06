import bcrypt from "bcryptjs"
import express from 'express';
import { validationResult } from "express-validator";
class TeachersController {
    
    teachersService: any;
    findTeacher: any;
    constructor(teachersService: any) {
        this.teachersService = teachersService;
    }

    async createTeacher(req: express.Request, res: express.Response) {
        const {  nameTeacher, surname, login, password, nameDiscipline } = req.body;
        const role: string = "user";
        const healthStatus: string = "healthy";
        const newTeacher = await this.teachersService.createTeacher(
             nameTeacher, 
             surname, 
             login, 
             password, 
             nameDiscipline, 
             healthStatus, 
             role );
        res.json(newTeacher);
    }

    async findOneTeacher(req: express.Request, res: express.Response) {
        const OneTeacher = await this.teachersService.findOneTeacher(
            req.params.id
        );
        res.json(OneTeacher);
    }

    async findTeachers(req: express.Request, res: express.Response) {
        const teacher = await this.teachersService.findTeachers();
        res.json(teacher);
    }

    async updateTeacher(req: express.Request, res: express.Response) {
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

    async deleteTeacher(req: express.Request, res: express.Response) {
        const deleteTeacher = await this.teachersService.deleteTeacher(
            req.params.id
        );
            if(deleteTeacher.deletedCount > 0){
                res.json(deleteTeacher);
            } else res.json({ message: "Не вдалось видалити." })
            
                
    }

    async registrationTeacher(req: express.Request, res: express.Response) {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json(err);
        }
        const { nameTeacher, surname, login, password, nameDiscipline } = req.body;
        const candidate = await this.teachersService.loginVerification(login);
        const role: string = "user";
        const healthStatus: string = "healthy";

        if (candidate) {
            return res.status(400).json({ message: "User exists" });
        } else {

            const hashPassword = bcrypt.hashSync(password, 7);
            const user = await this.teachersService.createTeacher(
                nameTeacher, 
                surname, 
                login, 
                hashPassword, 
                nameDiscipline, 
                healthStatus, 
                role
            );
            return res.json(user);
        }
    }
}

export { TeachersController };