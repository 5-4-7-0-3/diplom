import express from "express";
import { check, param } from "express-validator";
import controllers from "../controllers";
import authMiddleware from "../middleware/authMiddleware";
import roleMiddleware from "../middleware/roleMiddleware";


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
    ],
    roleMiddleware(['admin']),
    controllers.teacherController.createTeacher.bind(controllers.teacherController)

);

router.get(
    "/findOneTeacher/:id",
    roleMiddleware(['admin']),
    controllers.teacherController.findOneTeacher.bind(controllers.teacherController)

);

router.get(
    "/findTeachers",
    roleMiddleware(['admin']),
    controllers.teacherController.findTeachers.bind(controllers.teacherController)

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
    ],
    roleMiddleware(['user','admin']),
    controllers.teacherController.updateTeacher.bind(controllers.teacherController)

);

router.delete(
    "/deleteTeacher/:id",
    roleMiddleware(['admin']),
    controllers.teacherController.deleteTeacher.bind(controllers.teacherController)

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

router.post(
    "/auth",[
        check("login").isEmail(),
        check(
            "password",
            "Пароль повинний мати більше 5 символів"
        ).isLength({ min: 5, max: 24 }),
    ], controllers.teacherController.authTeacher.bind(controllers.teacherController)

);

router.post(
    "/refreshToken",
    controllers.teacherController.refreshToken.bind(controllers.teacherController)
);

export default router;
