class TeachersService {
    teacherDAO: any;
    constructor(teacherDAO:any) {
        this.teacherDAO = teacherDAO;
    }
    createTeacher( nameTeacher:string, surname:string, login:string, password:string, discipline:string, healthStatus:string, role:string ) {
        return this.teacherDAO.createTeacher( nameTeacher, surname, login, password, discipline, healthStatus, role );
    }

    findOneTeacher(id: string) {
        return this.teacherDAO.findOneTeacher(id);
    }

    findTeachers() {
        return this.teacherDAO.findTeachers();
    }

    updateTeacher(id: string, nameTeacher:string, surname:string, login:string, password:string, discipline:string, healthStatus:string, role:string ) {
        return this.teacherDAO.updateTeacher(id, nameTeacher, surname, login, password, discipline, healthStatus, role );
    }

    deleteTeacher(id: string) {
        return this.teacherDAO.deleteTeacher(id);
    }
}
export { TeachersService };