const axios = require('axios').default;

async function createWorkingHours(nameGroups, nameDisciplines, workingHours) {
    try {
        const response = await axios.post('http://localhost:3000/workingHours/create', {
            nameGroups,
            nameDisciplines,
            workingHours
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getWorkingHours() {
    try {
        const response = await axios.get('http://localhost:3000/workingHours/findworkingHours');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getOneWorkingHours(id) {
    try {
        const response = await axios.get(`http://localhost:3000/workingHours/findOneWorkingHours/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function updateWorkingHours(id, nameGroups, nameDisciplines, workingHours) {
    try {
        const response = await axios.put(`http://localhost:3000/workingHours/updateWorkingHours/${id}`, {
            nameGroups,
            nameDisciplines,
            workingHours
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function deleteWorkingHours(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/workingHours/deleteWorkingHours/${id}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export default { createWorkingHours, getWorkingHours, getOneWorkingHours, updateWorkingHours, deleteWorkingHours }
