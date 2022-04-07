import DAO from "../dao";

import { TeachersService } from "./teacher";
import { DisciplineService } from "./discipline";
import { ScheduleService } from "./schedule";
import { TokenService } from "./tokens";



const teachersService = new TeachersService(DAO.teachersDAO);
const disciplineService = new DisciplineService(DAO.disciplineDAO);
const scheduleService = new ScheduleService(DAO.scheduleDAO);
const tokenService = new TokenService(DAO.tokenDAO);

export default {
    teachersService,
    disciplineService,
    scheduleService,
    tokenService
};
