import express from 'express';
class GroupsController {

    groupsService: any;
    constructor(groupsService: any) {
        this.groupsService = groupsService;
    }

    async createGroup(req: express.Request, res: express.Response) {
        const { nameGroups } = req.body;
        const newGroups = await this.groupsService.createGroup( nameGroups );
        res.json(newGroups);
    }

    async findOneGroup(req: express.Request, res: express.Response) {
        const oneGroups = await this.groupsService.findOneGroup(
            req.params.id
        );
        res.json(oneGroups);
    }

    async findGroups(req: express.Request, res: express.Response) {
        const groups = await this.groupsService.findGroups();
        res.json(groups);
    }

    async updateGroup(req: express.Request, res: express.Response) {
        const { nameGroups } = req.body;
        const updateGroups = await this.groupsService.updateGroup(
            req.params.id,
            nameGroups
        );
        res.json(updateGroups);
    }

    async deleteGroup(req: express.Request, res: express.Response) {
        const deleteGroup = await this.groupsService.deleteGroup(
            req.params.id
        );
            if(deleteGroup.deletedCount > 0){
                res.json(deleteGroup);
            } else res.json({ message: "Не вдалось видалити." })

    }
}

export { GroupsController };
