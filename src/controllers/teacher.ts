import bcrypt from "bcryptjs"
import express from 'express';
import { validationResult } from "express-validator";
class TeachersController {

    teachersService: any;
    tokenService: any;
    constructor(teachersService: any, tokenService: any) {
        this.teachersService = teachersService;
        this.tokenService = tokenService;
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
            return res.status(400).json({ message: "Користувач існує" });
        } else {

            const hashPassword = bcrypt.hashSync(password, 7);
            const teacher = await this.teachersService.createTeacher(
                nameTeacher,
                surname,
                login,
                hashPassword,
                nameDiscipline,
                healthStatus,
                role
            );
            return res.json(teacher);
        }
    }

    async authTeacher(req: express.Request, res: express.Response) {
        const { login, password } = req.body;
        const teacher = await this.teachersService.loginVerification(login);

        if (!teacher) {
            return res
                .status(400)
                .json({ message: `Користувача з таким логіном ${login} не знайдено` });
        }

        const validationPassword = bcrypt.compareSync(password, teacher.password);

        if (!validationPassword) {
            return res.status(400).json({ message: `Неправильний пароль` });
        }
        const accessToken = this.tokenService.generateAccessToken(teacher.id, teacher.role);
        const refreshToken = this.tokenService.generateRefreshToken();
        this.tokenService.saveRefreshToken(teacher.id, refreshToken);
        return res.json({ accessToken, refreshToken });
    }

    async refreshToken(req: express.Request, res: express.Response) {
        const { teacher_id, refreshToken } = req.body;
        const validationToken = await this.tokenService.updateRefreshToken(
            teacher_id,
            refreshToken
        );
        const checkToken = this.tokenService.checkToken(refreshToken);
        const teacher = await this.teachersService.findOneTeacher(teacher_id);

        if (validationToken <= 0 || !checkToken) {
            return res.status(400).json({ message: `Неприпустимий токен` });
        }

        const newAccessToken = this.tokenService.generateAccessToken(teacher_id, teacher.role);
        const newRefreshToken = this.tokenService.generateRefreshToken();

        await this.tokenService.saveRefreshToken(teacher_id, newRefreshToken);
        return res.json({ newAccessToken, newRefreshToken });
    }
}

export { TeachersController };
