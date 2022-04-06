class TeachersService {
    teacherDAO: any;
    constructor(teacherDAO:any) {
        this.teacherDAO = teacherDAO;
    }
    createTeacher( nameTeacher:string, surname:string, login:string, hashPassword:string, nameDiscipline:string, healthStatus:string, role:string ) {
        return this.teacherDAO.createTeacher( nameTeacher, surname, login, hashPassword, nameDiscipline, healthStatus, role );
    }

    findOneTeacher(id: string) {
        return this.teacherDAO.findOneTeacher(id);
    }

    findTeachers() {
        return this.teacherDAO.findTeachers();
    }

    updateTeacher(id: string, nameTeacher:string, surname:string, login:string, password:string, nameDiscipline:string, healthStatus:string, role:string ) {
        return this.teacherDAO.updateTeacher(id, nameTeacher, surname, login, password, nameDiscipline, healthStatus, role );
    }

    deleteTeacher(id: string) {
        return this.teacherDAO.deleteTeacher(id);
    }

    loginVerification(login: string) {
        return this.teacherDAO.loginVerification(login);
    }
}
export { TeachersService };