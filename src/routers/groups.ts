import express from "express";
import controllers from "../controllers";
const router = express.Router();

router.post(
    "/create", controllers.groupsController.createGroup.bind(controllers.groupsController)

);

router.get(
    "/findOneGroup/:id", controllers.groupsController.findOneGroup.bind(controllers.groupsController)

);

router.get(
    "/findGroup", controllers.groupsController.findGroups.bind(controllers.groupsController)

);

router.put(
    "/updateGroup/:id", controllers.groupsController.updateGroup.bind(controllers.groupsController)

);

router.delete(
    "/deleteGroup/:id", controllers.groupsController.deleteGroup.bind(controllers.groupsController)

);

export default router;