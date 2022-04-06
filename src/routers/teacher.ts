import { check, param } from "express-validator";
import express from "express";
import controllers from "../controllers";
const router = express.Router();

router.post(
    "/create",[
        check("nameTeacher", "Введіть Ім'я").notEmpty(),
        check("surname", "Введіть фамілію").notEmpty(),
        check("login").isEmail(),
        check(
            "password",
            "Пароль повинний мати більше 5 символів"
        ).isLength({ min: 5, max: 24 }),
    ], controllers.teacherController.createTeacher.bind(controllers.teacherController)

);

router.get(
    "/findOneTeacher/:id", controllers.teacherController.findOneTeacher.bind(controllers.teacherController)

);

router.get(
    "/findTeachers", controllers.teacherController.findTeachers.bind(controllers.teacherController)

);

router.put(
    "/updateTeacher/:id",[
        check("nameTeacher", "Введіть Ім'я").notEmpty(),
        check("surname", "Введіть фамілію").notEmpty(),
        check("login").isEmail(),
        check(
            "password",
            "Пароль повинний мати більше 5 символів"
        ).isLength({ min: 5, max: 24 }),
    ], controllers.teacherController.updateTeacher.bind(controllers.teacherController)

);

router.delete(
    "/deleteTeacher/:id", controllers.teacherController.deleteTeacher.bind(controllers.teacherController)

);

router.post(
    "/registration",[
        check("nameTeacher", "Введіть Ім'я").notEmpty(),
        check("surname", "Введіть фамілію").notEmpty(),
        check("login").isEmail(),
        check(
            "password",
            "Пароль повинний мати більше 5 символів"
        ).isLength({ min: 5, max: 24 }),
    ], controllers.teacherController.registrationTeacher.bind(controllers.teacherController)

);

export default router;