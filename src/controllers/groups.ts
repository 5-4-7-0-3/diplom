class GroupsController {
    
    groupsService: any;
    constructor(groupsService: any) {
        this.groupsService = groupsService;
    }

    async createGroup(req: any, res: any) {
        const { nameGroup } = req.body;
        const newGroup = await this.groupsService.createGroup( nameGroup );
        res.json(newGroup);
    }

    async findOneGroup(req: any, res: any) {
        const OneGroup = await this.groupsService.findOneGroup(
            req.params.id
        );
        res.json(OneGroup);
    }

    async findGroups(req: any, res: any) {
        const groups = await this.groupsService.findGroups();
        res.json(groups);
    }

    async updateGroup(req: any, res: any) {
        const { nameGroup } = req.body;
        const updateGroups = await this.groupsService.updateGroup(
            req.params.id,
            nameGroup
        );
        res.json(updateGroups);
    }

    async deleteGroup(req: any, res: any) {
        const deleteGroups = await this.groupsService.deleteGroup(
            req.params.id
        );
            if(deleteGroups.deletedCount > 0){
                res.json(deleteGroups);
            } else res.json({ message: "Не вдалось видалити." })
                
    }
}

export { GroupsController };