import express from 'express';
class CoupleController {

    coupleService: any;
    constructor(coupleService: any) {
        this.coupleService = coupleService;
    }

    async createCouple(req: express.Request, res: express.Response) {
        const { timeInterval } = req.body;
        const newCouple = await this.coupleService.createCouple( timeInterval );
        res.json(newCouple);
    }

    async findOneCouple(req: express.Request, res: express.Response) {
        const oneCouple = await this.coupleService.findOneCouple(
            req.params.id
        );
        res.json(oneCouple);
    }

    async findCouple(req: express.Request, res: express.Response) {
        const couple = await this.coupleService.findCouple();
        res.json(couple);
    }

    async updateCouple(req: express.Request, res: express.Response) {
        const { timeInterval } = req.body;
        const updateCouple = await this.coupleService.updateCouple(
            req.params.id,
            timeInterval
        );
        res.json(updateCouple);
    }

    async deleteCouple(req: express.Request, res: express.Response) {
        const deleteCouple = await this.coupleService.deleteCouple(
            req.params.id
        );
            if(deleteCouple.deletedCount > 0){
                res.json(deleteCouple);
            } else res.json({ message: "Не вдалось видалити." })

    }
}

export { CoupleController };
