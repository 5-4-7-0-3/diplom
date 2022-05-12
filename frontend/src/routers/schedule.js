const axios = require('axios').default;

async function createSchedule(date, nameGroups, nameDisciplines, timeInterval, teacher) {
    try {
        const response = await axios.post('http://localhost:3000/schedule/create', {
            date,
            nameGroups,
            nameDisciplines,
            timeInterval,
            teacher
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getSchedules() {
    try {
        const response = await axios.get('http://localhost:3000/schedule/findSchedule');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getOneSchedule(id) {
    try {
        const response = await axios.get(`http://localhost:3000/schedule/findOneSchedule/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function updateSchedule(id, date, nameGroups, nameDisciplines, timeInterval, teacher) {
    try {
        const response = await axios.put(`http://localhost:3000/schedule/updateSchedule/${id}`, {
            date,
            nameGroups,
            nameDisciplines,
            timeInterval,
            teacher
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function deleteSchedules(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/schedule/${id}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export default { createSchedule, getSchedules, getOneSchedule, updateSchedule, deleteSchedules }
