import express from "express";
import controllers from "../controllers";
import roleMiddleware from "../middleware/roleMiddleware";
const router = express.Router();

router.post(
    "/create",
    // roleMiddleware(['admin','user']),
    controllers.teacherOrientationController.createTeacherOrientation.bind(controllers.teacherOrientationController)

);

router.get(
    "/findOneTeacherOrientation/:id", controllers.teacherOrientationController.findOneTeacherOrientation.bind(controllers.teacherOrientationController)

);

router.get(
    "/findTeacherOrientation", controllers.teacherOrientationController.findTeacherOrientation.bind(controllers.teacherOrientationController)

);

router.put(
    "/updateTeacherOrientation/:id",
    // roleMiddleware(['admin','user']),
    controllers.teacherOrientationController.updateTeacherOrientation.bind(controllers.teacherOrientationController)

);

router.delete(
    "/deleteTeacherOrientation/:id",
    // roleMiddleware(['admin','user']),
    controllers.teacherOrientationController.deleteTeacherOrientation.bind(controllers.teacherOrientationController)

);

export default router;
