import mongoose from "mongoose";
const Schema = mongoose.Schema;

const groupsSchema = new Schema({
    nameGroup: {
        type: String,
        required: true,
    }
});

const Groups = mongoose.model("Groups", groupsSchema);
export { Groups };