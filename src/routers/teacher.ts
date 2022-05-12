import express from "express";
import { check, param } from "express-validator";
import controllers from "../controllers";
import roleMiddleware from "../middleware/roleMiddleware";


const router = express.Router();

router.post(
    "/create",[
        check("nameTeacher", "Введіть Ім'я").notEmpty(),
        check("surname", "Введіть фамілію").notEmpty(),
        check("email").isEmail(),
        check(
            "password",
            "Пароль повинний мати більше 5 символів"
        ).isLength({ min: 5, max: 24 }),
    ],
    // roleMiddleware(['admin']),
    controllers.teachersController.createTeacher.bind(controllers.teachersController)

);

router.get(
    "/findOneTeacher/:id",
    // roleMiddleware(['admin']),
    controllers.teachersController.findOneTeacher.bind(controllers.teachersController)

);

router.get(
    "/findTeachers",
    // roleMiddleware(['admin']),
    controllers.teachersController.findTeachers.bind(controllers.teachersController)

);

router.put(
    "/updateTeacher/:id",[
        check("nameTeacher", "Введіть Ім'я").notEmpty(),
        check("surname", "Введіть фамілію").notEmpty(),
        check("email").isEmail(),
        check(
            "password",
            "Пароль повинний мати більше 5 символів"
        ).isLength({ min: 5, max: 24 }),
    ],
    // roleMiddleware(['user','admin']),
    controllers.teachersController.updateTeacher.bind(controllers.teachersController)

);

router.delete(
    "/deleteTeacher/:id",
    // roleMiddleware(['admin']),
    controllers.teachersController.deleteTeacher.bind(controllers.teachersController)

);

router.post(
    "/registration",[
        check("name", "Введіть Ім'я").notEmpty(),
        check("surname", "Введіть фамілію").notEmpty(),
        check("email").isEmail(),
        check(
            "password",
            "Пароль повинний мати більше 5 символів"
        ).isLength({ min: 5, max: 24 }),
    ], controllers.teachersController.registrationTeacher.bind(controllers.teachersController)

);

router.post(
    "/auth",[
        check("email").isEmail(),
        check(
            "password",
            "Пароль повинний мати більше 5 символів"
        ).isLength({ min: 5, max: 24 }),
    ], controllers.teachersController.authTeacher.bind(controllers.teachersController)

);

router.post(
    "/refreshToken",
    controllers.teachersController.refreshToken.bind(controllers.teachersController)
);

export default router;
