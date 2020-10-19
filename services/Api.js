import axios from 'axios';

const Api = axios.create({baseURL: process.env.NEXT_PUBLIC_API_URL})

Api.defaults.headers.post['Content-Type'] = 'application/json';

export default Api;