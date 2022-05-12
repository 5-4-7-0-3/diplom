import mongoose from "mongoose";
const Schema = mongoose.Schema;

const coupleSchema = new Schema({
    numberCouple: {
        type: String,
        required: true,
    },
    timeInterval: {
        type: String,
        required: true,
    }
});

const Couple = mongoose.model("couple", coupleSchema);
export { Couple };
