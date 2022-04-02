import express from "express";
import controllers from "../controllers";
const router = express.Router();

router.post(
    "/create", controllers.disciplineController.createDiscipline.bind(controllers.disciplineController)

);

router.get(
    "/findOneDiscipline/:id", controllers.disciplineController.findOneDiscipline.bind(controllers.disciplineController)

);

router.get(
    "/findDiscipline", controllers.disciplineController.findDiscipline.bind(controllers.disciplineController)

);

router.put(
    "/updateDiscipline/:id", controllers.disciplineController.updateDiscipline.bind(controllers.disciplineController)

);

router.delete(
    "/deleteDiscipline/:id", controllers.disciplineController.deleteDiscipline.bind(controllers.disciplineController)

);

export default router;