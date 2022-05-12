class GroupsService {
    groupsDAO: any;
    constructor(groupsDAO:any) {
        this.groupsDAO = groupsDAO;
    }

    createGroup(nameGroups: string) {
        return this.groupsDAO.createGroup(nameGroups);
    }

    findOneGroup(id: string) {
        return this.groupsDAO.findOneGroup(id);
    }

    findGroups() {
        return this.groupsDAO.findGroups();
    }

    updateGroup(id: string, nameGroups: string) {
        return this.groupsDAO.updateGroup(id, nameGroups);
    }

    deleteGroup(id: string) {
        return this.groupsDAO.deleteGroup(id);
    }
}
export { GroupsService };
