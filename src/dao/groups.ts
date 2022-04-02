import { Groups } from "../db/models/groups";

class GroupsDAO {
    createGroup(nameGroup: string) {
        return new Groups({
        nameGroup
        }).save();
    }

    findOneGroup(id: string) {
        return Groups.findById(id);
    }

    findGroups(){
        return Groups.find();
    }

    updateGroup(id: string, nameGroup: string){
        return Groups.findOneAndUpdate(
            { _id: id },
            {
              $set: {nameGroup}
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