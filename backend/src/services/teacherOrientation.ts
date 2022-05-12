class TeacherOrientationService {
    teacherOrientationDAO: any;
    constructor(teacherOrientationDAO:any) {
        this.teacherOrientationDAO = teacherOrientationDAO;
    }

    createTeacherOrientation(nameTeacher: string, nameDisciplines: string) {
        return this.teacherOrientationDAO.createTeacherOrientation(nameTeacher, nameDisciplines);
    }

    findOneTeacherOrientation(id: string) {
        return this.teacherOrientationDAO.findOneTeacherOrientation(id);
    }

    findTeacherOrientation() {
        return this.teacherOrientationDAO.findTeacherOrientation();
    }

    updateTeacherOrientation(id: string, nameTeacher: string, nameDisciplines: string) {
        return this.teacherOrientationDAO.updateTeacherOrientation(id, nameTeacher, nameDisciplines);
    }

    deleteTeacherOrientation(id: string) {
        return this.teacherOrientationDAO.deleteTeacherOrientation(id);
    }
}
export { TeacherOrientationService };
