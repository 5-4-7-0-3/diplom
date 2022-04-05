import express from "express";
import controllers from "../controllers";
const router = express.Router();

router.post(
    "/create", controllers.scheduleController.createSchedule.bind(controllers.scheduleController)

);

router.get(
    "/findOneSchedule/:id", controllers.scheduleController.findOneSchedule.bind(controllers.scheduleController)

);

router.get(
    "/findSchedule", controllers.scheduleController.findSchedule.bind(controllers.scheduleController)

);

router.put(
    "/updateSchedule/:id", controllers.scheduleController.updateSchedule.bind(controllers.scheduleController)

);

router.delete(
    "/deleteSchedule/:id", controllers.scheduleController.deleteSchedule.bind(controllers.scheduleController)

);

export default router;