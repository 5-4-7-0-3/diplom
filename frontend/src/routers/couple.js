const axios = require('axios').default;

async function createCouple(numberCouple, timeInterval) {
    try {
        const response = await axios.post('http://localhost:3000/couple/create', {
            numberCouple,
            timeInterval
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getCouples() {
    try {
        const response = await axios.get('http://localhost:3000/couple/findCouple');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function getOneCouple(id) {
    try {
        const response = await axios.get(`http://localhost:3000/couple/findOneCouple/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function updateCouple(id, numberCouple, timeInterval) {
    try {
        const response = await axios.put(`http://localhost:3000/couple/updateCouple/${id}`, {
            numberCouple,
            timeInterval
        })
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function deleteCouples(id) {
    try {
        const response = await axios.delete(`http://localhost:3000/couple/deleteCouple/${id}`);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
getCouples()
export default { createCouple, getCouples, getOneCouple, updateCouple, deleteCouples }
