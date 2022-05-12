class CoupleService {
    coupleDAO: any;
    constructor(coupleDAO:any) {
        this.coupleDAO = coupleDAO;
    }

    createCouple(numberCouple: string, timeInterval: string) {
        return this.coupleDAO.createCouple(numberCouple, timeInterval);
    }

    findOneCouple(id: string) {
        return this.coupleDAO.findOneCouple(id);
    }

    findCouple() {
        return this.coupleDAO.findCouple();
    }

    updateCouple(id: string, numberCouple: string, timeInterval: string) {
        return this.coupleDAO.updateCouple(id, numberCouple, timeInterval);
    }

    deleteCouple(id: string) {
        return this.coupleDAO.deleteCouple(id);
    }
}
export { CoupleService };
