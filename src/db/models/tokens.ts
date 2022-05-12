import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tokensSchema = new Schema({

    teacher_id: {
        type: String,
        required: true,
    },

    refreshToken: {
        type: String,
        required: true,
    }
});

const Tokens = mongoose.model("tokens", tokensSchema);
export { Tokens };
