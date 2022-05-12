const axios = require('axios').default;

async function createDiscipline(nameDisciplines) {
    try {
        const response = await axios.post('http://localhost:3000/discipline/create', {
            nameDisciplines
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getDisciplines() {
    try {
        const response = await axios.get('http://localhost:3000/discipline/findDiscipline');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getOneDiscipline(id) {
    try {
        const response = await axios.get(`http://localhost:3000/discipline/findOneDiscipline/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function updateDiscipline(id, nameDisciplines) {
    try {
        const response = await axios.put(`http://localhost:3000/discipline/updateDiscipline/${id}`, {
            nameDisciplines
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function deleteDiscipline(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/discipline/deleteDiscipline/${id}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export default { createDiscipline, getDisciplines, getOneDiscipline, updateDiscipline, deleteDiscipline }
