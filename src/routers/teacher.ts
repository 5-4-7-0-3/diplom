import express from "express";
import controllers from "../controllers";
const router = express.Router();

router.post(
    "/create", controllers.teacherController.createTeacher.bind(controllers.teacherController)

);

router.get(
    "/findOneTeacher/:id", controllers.teacherController.findOneTeacher.bind(controllers.teacherController)

);

router.get(
    "/findTeachers", controllers.teacherController.findTeachers.bind(controllers.teacherController)

);

router.put(
    "/updateTeacher/:id", controllers.teacherController.updateTeacher.bind(controllers.teacherController)

);

router.delete(
    "/deleteTeacher/:id", controllers.teacherController.deleteTeacher.bind(controllers.teacherController)

);

export default router;