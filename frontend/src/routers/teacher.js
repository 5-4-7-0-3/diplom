const axios = require('axios').default;

async function createTeacher(name, surname, email, password) {
    try {
        const response = await axios.post('http://localhost:3000/teacher/create', {
            name,
            surname,
            email,
            password
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getTeachers() {
    try {
        const response = await axios.get('http://localhost:3000/teacher/findTeachers');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getOneTeacher(id) {
    try {
        const response = await axios.get(`http://localhost:3000/teacher/findOneTeacher/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function updateTeacher(id, name, surname, email, password) {
    try {
        const response = await axios.put(`http://localhost:3000/teacher/updateTeacher/${id}`, {
            name,
            surname,
            email,
            password
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function deleteTeachers(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/teacher/deleteTeacher/${id}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

async function registration(name, surname, email, password) {
    try {
        const response = await axios.post('http://localhost:3000/teacher/registration', {
            name,
            surname,
            email,
            password
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function auth(email, password) {
    try {
        const response = await axios.post('http://localhost:3000/teacher/auth', {
            email,
            password
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function refreshT(teacher_id, refreshToken) {
    try {
        const response = await axios.post('http://localhost:3000/teacher/refreshToken', {
            teacher_id,
            refreshToken
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export default { createTeacher, getTeachers, getOneTeacher, updateTeacher, deleteTeachers, registration, auth, refreshT }
