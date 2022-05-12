const axios = require('axios').default;

async function createGroup(nameGroups) {
    try {
        const response = await axios.post('http://localhost:3000/groups/create', {
            nameGroups
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getGroups() {
    try {
        const response = await axios.get('http://localhost:3000/groups/findGroups');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getOneGroup(id) {
    try {
        const response = await axios.get(`http://localhost:3000/groups/findOneGroup/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function updateGroup(id, nameGroups) {
    try {
        const response = await axios.put(`http://localhost:3000/groups/updateGroup/${id}`, {
            nameGroups
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function deleteGroup(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/groups/deleteGroup/${id}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export default { createGroup, getGroups, getOneGroup, updateGroup, deleteGroup }
