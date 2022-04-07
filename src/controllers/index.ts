import services from "../services";
import { DisciplineController } from "./discipline";
import { TeachersController } from "./teacher";
import { ScheduleController }from "./schedule"

const teacherController = new TeachersController(services.teachersService, services.tokenService);
const disciplineController = new DisciplineController(services.disciplineService);
const scheduleController = new ScheduleController(services.scheduleService)

export default {
    teacherController,
    disciplineController,
    scheduleController
};
