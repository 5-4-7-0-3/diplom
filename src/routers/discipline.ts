import express from "express";
import controllers from "../controllers";
import roleMiddleware from "../middleware/roleMiddleware";
const router = express.Router();

router.post(
    "/create",
    // roleMiddleware(['admin']),
    controllers.disciplineController.createDiscipline.bind(controllers.disciplineController)

);

router.get(
    "/findOneDiscipline/:id", controllers.disciplineController.findOneDiscipline.bind(controllers.disciplineController)

);

router.get(
    "/findDiscipline", controllers.disciplineController.findDisciplines.bind(controllers.disciplineController)

);

router.put(
    "/updateDiscipline/:id",
    // roleMiddleware(['admin']),
    controllers.disciplineController.updateDiscipline.bind(controllers.disciplineController)

);

router.delete(
    "/deleteDiscipline/:id",
    // roleMiddleware(['admin']),
    controllers.disciplineController.deleteDiscipline.bind(controllers.disciplineController)

);

export default router;
