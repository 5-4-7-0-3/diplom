class GroupService {
    groupsDAO: any;
    constructor(groupsDAO:any) {
        this.groupsDAO = groupsDAO;
    }
    createGroup(nameGroup: string) {
        return this.groupsDAO.createGroup(nameGroup);
    }

    findOneGroup(id: string) {
        return this.groupsDAO.findOneGroup(id);
    }

    findGroups() {
        return this.groupsDAO.findGroups();
    }

    updateGroup(id: string, nameGroup: string) {
        return this.groupsDAO.updateGroup(id, nameGroup);
    }

    deleteGroup(id: string) {
        return this.groupsDAO.deleteGroup(id);
    }
}
export { GroupService };