import DAO from "../dao";

import { GroupService } from "./groups";
import { TeachersService } from "./teacher";
import { DisciplineService } from "./discipline";




const groupService = new GroupService(DAO.groupsDAO);
const studentsService = new TeachersService(DAO.teachersDAO);
const disciplineService = new DisciplineService(DAO.disciplineDAO)

export default {
    groupService,
    studentsService,
    disciplineService
};