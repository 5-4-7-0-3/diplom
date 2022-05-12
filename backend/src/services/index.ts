import DAO from "../dao";

import { TeachersService } from "./teacher";
import { TokenService } from "./tokens";
import { CoupleService } from "./couple";
import { DisciplineService } from "./discipline";
import { GroupsService } from "./groups";
import { ScheduleService } from "./schedule";
import { TeacherOrientationService } from "./teacherOrientation";
import { WorkingHoursService } from "./workingHours";



const teachersService = new TeachersService(DAO.teachersDAO);
const tokenService = new TokenService(DAO.tokenDAO);
const coupleService = new CoupleService(DAO.coupleDAO);
const disciplineService = new DisciplineService(DAO.disciplineDAO);
const groupsService = new GroupsService(DAO.groupsDAO);
const scheduleService = new ScheduleService(DAO.scheduleDAO);
const teacherOrientationService = new TeacherOrientationService(DAO.teacherOrientationDAO);
const workingHoursService = new WorkingHoursService(DAO.workingHoursDAO);


export default {
    teachersService,
    tokenService,
    coupleService,
    disciplineService,
    groupsService,
    scheduleService,
    teacherOrientationService,
    workingHoursService
};
