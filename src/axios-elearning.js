import axios from 'axios';

const instance =axios.create({
    baseURL: 'http://10.10.1.65:8080/api-1.0/api/'
});

export default instance;
