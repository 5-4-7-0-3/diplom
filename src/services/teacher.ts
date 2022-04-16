class TeachersService {
    teachersDAO: any;
    constructor(teachersDAO:any) {
        this.teachersDAO = teachersDAO;
    }
    createTeacher( name:string, surname:string, email:string, password:string, healthStatus:string, role:string ) {
        return this.teachersDAO.createTeacher( name, surname, email, password, healthStatus, role );
    }

    findOneTeacher(id: string) {
        return this.teachersDAO.findOneTeacher(id);
    }

    findTeachers() {
        return this.teachersDAO.findTeachers();
    }

    updateTeacher(id: string, name:string, surname:string, email:string, password:string, healthStatus:string, role:string ) {
        return this.teachersDAO.updateTeacher(id, name, surname, email, password, healthStatus, role );
    }

    deleteTeacher(id: string) {
        return this.teachersDAO.deleteTeacher(id);
    }

    loginVerification(email: string) {
        return this.teachersDAO.loginVerification(email);
    }
}
export { TeachersService };
