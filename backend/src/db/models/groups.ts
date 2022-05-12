import mongoose from "mongoose";
const Schema = mongoose.Schema;

const groupsSchema = new Schema({
    nameGroups: {
        type: String,
        required: true,
    }
});

const Groups = mongoose.model("groups", groupsSchema);
export { Groups };
