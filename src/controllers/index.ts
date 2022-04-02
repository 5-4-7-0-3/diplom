import services from "../services";
import { DisciplineController } from "./discipline";
import { GroupsController } from "./groups";
import { TeachersController } from "./teacher";


const groupsController = new GroupsController(services.groupService);
const teacherController = new TeachersController(services.studentsService);
const disciplineController = new DisciplineController(services.disciplineService);


export default {
    groupsController,
    teacherController,
    disciplineController
};