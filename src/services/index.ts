import DAO from "../dao";

import { TeachersService } from "./teacher";
import { DisciplineService } from "./discipline";
import { ScheduleService } from "./schedule";



const studentsService = new TeachersService(DAO.teachersDAO);
const disciplineService = new DisciplineService(DAO.disciplineDAO);
const scheduleService = new ScheduleService(DAO.scheduleDAO);

export default {
    studentsService,
    disciplineService,
    scheduleService
};