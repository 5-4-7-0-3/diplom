import express from "express";
import controllers from "../controllers";
import roleMiddleware from "../middleware/roleMiddleware";
const router = express.Router();

router.post(
    "/create",
    // roleMiddleware(['admin']),
    controllers.workingHoursController.createWorkingHours.bind(controllers.workingHoursController)

);

router.get(
    "/findOneWorkingHours/:id", controllers.workingHoursController.findOneWorkingHours.bind(controllers.workingHoursController)

);

router.get(
    "/findWorkingHours", controllers.workingHoursController.findWorkingHours.bind(controllers.workingHoursController)

);

router.put(
    "/updateWorkingHours/:id",
    // roleMiddleware(['admin']),
    controllers.workingHoursController.updateWorkingHours.bind(controllers.workingHoursController)

);

router.delete(
    "/deleteWorkingHours/:id",
    // roleMiddleware(['admin']),
    controllers.workingHoursController.deleteWorkingHours.bind(controllers.workingHoursController)

);

export default router;
