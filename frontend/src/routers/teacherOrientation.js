const axios = require('axios').default;

async function createTeacherOrientation(nameTeacher, nameDisciplines) {
    try {
        const response = await axios.post('http://localhost:3000/teacherOrientation/create', {
            nameTeacher,
            nameDisciplines
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getTeacherOrientation() {
    try {
        const response = await axios.get('http://localhost:3000/teacherOrientation/findTeacherOrientation');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getOneTeacherOrientation(id) {
    try {
        const response = await axios.get(`http://localhost:3000/teacherOrientation/findOneTeacherOrientation/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function updateTeacherOrientation(id, nameTeacher, nameDisciplines) {
    try {
        const response = await axios.put(`http://localhost:3000/teacherOrientation/updateTeacherOrientation/${id}`, {
            nameTeacher,
            nameDisciplines
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function deleteTeacherOrientation(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/teacherOrientation/deleteTeacherOrientation/${id}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export default { createTeacherOrientation, getTeacherOrientation, getOneTeacherOrientation, updateTeacherOrientation, deleteTeacherOrientation }
