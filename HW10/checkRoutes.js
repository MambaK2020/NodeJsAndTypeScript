import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const BASE_URL = `http://localhost:${PORT}`;


async function testLogin () {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email: 'testemail@gmail.com',
            password: '123456aq',
        });
        console.log('Token: ', response.data.token);
        return response.data;
    } catch (error) {
        if(error.response){
            console.log('Error: ', error.response.data.token);
        } else{
            console.error('Network error');
        }
        
    }
}

async function testAuthenticateJWT(token) {
    try {
        const response = await axios.get(`${BASE_URL}/protected`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        console.log('Response: ', response.data);

    } catch (error) {
        if (error.response) {
            console.error('Error: ', error.response.data);
        } else {
            console.error('Network error');
        }
    }
}

const token = await testLogin();
setTimeout(async()=>{
    await testAuthenticateJWT(token);
}, 8000);