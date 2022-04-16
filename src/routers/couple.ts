import express from "express";
import controllers from "../controllers";
import roleMiddleware from "../middleware/roleMiddleware";
const router = express.Router();

router.post(
    "/create",
    // roleMiddleware(['admin']),
    controllers.coupleController.createCouple.bind(controllers.coupleController)

);

router.get(
    "/findOneCouple/:id", controllers.coupleController.findOneCouple.bind(controllers.coupleController)

);

router.get(
    "/findCouple", controllers.coupleController.findCouple.bind(controllers.coupleController)

);

router.put(
    "/updateCouple/:id",
    // roleMiddleware(['admin']),
    controllers.coupleController.updateCouple.bind(controllers.coupleController)

);

router.delete(
    "/deleteCouple/:id",
    // roleMiddleware(['admin']),
    controllers.coupleController.deleteCouple.bind(controllers.coupleController)

);

export default router;
