import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
// config` for the full list of configs

const axiosClient = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    let token = localStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        console.log(response)
        console.log(response.data)
        return response.data;
    }
    console.log(30 + response)
    return response;
}, (error) => {
    // Handle errors
    console.log(error.response.data);
    console.log(34 + error.response);
    throw error;
});

export default axiosClient;