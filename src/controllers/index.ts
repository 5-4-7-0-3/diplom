import services from "../services";

import { CoupleController } from "./couple";
import { DisciplineController } from "./discipline";
import { GroupsController } from "./groups";
import { ScheduleController } from "./schedule";
import { TeachersController } from "./teacher";
import { TeacherOrientationController }from "./teacherOrientation";
import { WorkingHoursController } from "./workingHours";

const coupleController = new CoupleController(services.coupleService);
const disciplineController = new DisciplineController(services.disciplineService);
const groupsController = new GroupsController(services.groupsService);
const scheduleController = new ScheduleController(services.scheduleService);
const teachersController = new TeachersController(services.teachersService, services.tokenService);
const teacherOrientationController = new TeacherOrientationController(services.teacherOrientationService);
const workingHoursController = new WorkingHoursController(services.workingHoursService);


export default {
    coupleController,
    disciplineController,
    groupsController,
    scheduleController,
    teachersController,
    teacherOrientationController,
    workingHoursController

};
