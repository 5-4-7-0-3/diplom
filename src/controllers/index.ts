import services from "../services";
import { DisciplineController } from "./discipline";
import { GroupsController } from "./groups";
import { TeachersController } from "./teacher";
import { ScheduleController }from "./schedule"

const groupsController = new GroupsController(services.groupService);
const teacherController = new TeachersController(services.studentsService);
const disciplineController = new DisciplineController(services.disciplineService);
const scheduleController = new ScheduleController(services.scheduleService)

export default {
    groupsController,
    teacherController,
    disciplineController,
    scheduleController
};