import express from "express";
import controllers from "../controllers";
import roleMiddleware from "../middleware/roleMiddleware";
const router = express.Router();

router.post(
    "/create",
    roleMiddleware(['admin']),
    controllers.scheduleController.createSchedule.bind(controllers.scheduleController)

);

router.get(
    "/findOneSchedule/:id", controllers.scheduleController.findOneSchedule.bind(controllers.scheduleController)

);

router.get(
    "/findSchedule", controllers.scheduleController.findSchedule.bind(controllers.scheduleController)

);

router.put(
    "/updateSchedule/:id",
    roleMiddleware(['admin']),
    controllers.scheduleController.updateSchedule.bind(controllers.scheduleController)

);

router.delete(
    "/deleteSchedule/:id",
    roleMiddleware(['admin']),
    controllers.scheduleController.deleteSchedule.bind(controllers.scheduleController)

);

export default router;
