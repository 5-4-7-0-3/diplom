import { Groups } from "../db/models/groups";

class GroupsDAO {
    createGroup(nameGroups: string) {
        return new Groups({
            nameGroups
        }).save();
    }

    findOneGroup(id: string) {
        return Groups.findById(id);
    }

    findGroups(){
        return Groups.find();
    }

    updateGroup(id: string, nameGroups: string){
        return Groups.findOneAndUpdate(
            { _id: id },
            {
              $set: {
                nameGroups
                    }
            },
            { new: true }
          );
    }

    deleteGroup(id: string){
        return Groups.deleteOne({ _id: id })
    }

}

const groupsDAO = new GroupsDAO()

export { groupsDAO }
