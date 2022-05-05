import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const apiLeanTech = axios.create({
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export {apiLeanTech};
