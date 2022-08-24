import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        'content-type': 'multipart/form-data',
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
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});


const imageService = {
	upload: async (file) => {
		const url = "/admin/upload";
		const response = await axiosClient.post(url, file);
		console.log(response);
		return response;
	}
}

export default imageService;