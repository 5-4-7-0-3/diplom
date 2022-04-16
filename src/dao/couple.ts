import { Couple } from "../db/models/couple";

class CoupleDAO {
    createCouple(timeInterval: string) {
        return new Couple({
            timeInterval
        }).save();
    }

    findOneCouple(id: string) {
        return Couple.findById(id);
    }

    findCouple(){
        return Couple.find();
    }

    updateCouple(id: string, timeInterval: string){
        return Couple.findOneAndUpdate(
            { _id: id },
            {
              $set: {
                        timeInterval
                    }
            },
            { new: true }
          );
    }

    deleteCouple(id: string){
        return Couple.deleteOne({ _id: id })
    }

}

const coupleDAO = new CoupleDAO()

export { coupleDAO }
