import express from "express";
import controllers from "../controllers";
import roleMiddleware from "../middleware/roleMiddleware";
const router = express.Router();

router.post(
    "/create",
    // roleMiddleware(['admin']),
    controllers.groupsController.createGroup.bind(controllers.groupsController)

);

router.get(
    "/findOneGroup/:id", controllers.groupsController.findOneGroup.bind(controllers.groupsController)

);

router.get(
    "/findGroups", controllers.groupsController.findGroups.bind(controllers.groupsController)

);

router.put(
    "/updateGroup/:id",
    // roleMiddleware(['admin']),
    controllers.groupsController.updateGroup.bind(controllers.groupsController)

);

router.delete(
    "/deleteGroup/:id",
    // roleMiddleware(['admin']),
    controllers.groupsController.deleteGroup.bind(controllers.groupsController)

);

export default router;
