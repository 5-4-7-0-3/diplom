import { Couple } from "../db/models/couple";

class CoupleDAO {
    createCouple(timeInterval: string, numberCouple: string) {
        return new Couple({
            numberCouple,
            timeInterval
        }).save();
    }

    findOneCouple(id: string) {
        return Couple.findById(id);
    }

    findCouple(){
        return Couple.find();
    }

    updateCouple(id: string, timeInterval: string, numberCouple: string){
        return Couple.findOneAndUpdate(
            { _id: id },
            {
              $set: {
                        numberCouple,
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
