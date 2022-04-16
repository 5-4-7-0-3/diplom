class CoupleService {
    coupleDAO: any;
    constructor(coupleDAO:any) {
        this.coupleDAO = coupleDAO;
    }

    createCouple(timeInterval: string) {
        return this.coupleDAO.createCouple(timeInterval);
    }

    findOneCouple(id: string) {
        return this.coupleDAO.findOneCouple(id);
    }

    findCouple() {
        return this.coupleDAO.findCouple();
    }

    updateCouple(id: string, timeInterval: string) {
        return this.coupleDAO.updateCouple(id, timeInterval);
    }

    deleteCouple(id: string) {
        return this.coupleDAO.deleteCouple(id);
    }
}
export { CoupleService };
