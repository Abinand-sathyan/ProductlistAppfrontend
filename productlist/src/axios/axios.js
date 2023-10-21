import axios from 'axios';

const instance = axios.create({
    // baseURL:'https://jobport.onrender.com/',
    baseURL:'http://localhost:3000/',
    headers: {
        "Content-Type": "application/json",
      }
});
export default instance;