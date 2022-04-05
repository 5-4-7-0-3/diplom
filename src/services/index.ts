import DAO from "../dao";

import { GroupService } from "./groups";
import { TeachersService } from "./teacher";
import { DisciplineService } from "./discipline";
import { ScheduleService } from "./schedule";



const groupService = new GroupService(DAO.groupsDAO);
const studentsService = new TeachersService(DAO.teachersDAO);
const disciplineService = new DisciplineService(DAO.disciplineDAO);
const scheduleService = new ScheduleService(DAO.scheduleDAO);

export default {
    groupService,
    studentsService,
    disciplineService,
    scheduleService
};