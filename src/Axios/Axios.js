import axios from 'axios';

const instance = axios.create();
instance.defaults.baseURL='https://jsonplaceholder.typicode.com';

// instance.interceptors.request ...

export default instance;