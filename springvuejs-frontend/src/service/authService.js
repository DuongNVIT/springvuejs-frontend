import axiosClient from "./axiosClient";

const authService = {
    login: async (params) => {
        const url = "/signin"
        var response = await axiosClient.post(url, params);
        console.log(response);
        return response;
    },

    signup: async (params) => {
        const url = "/signup";
        console.log("vao signup api");
        var response = await axiosClient.post(url, params);
        console.log("signup xong");
        return response;
    },

    active: async ({username, code}) => {
        const url = `/active?username=${username}&code=${code}`;
        const response = await axiosClient.post(url);
        return response;
    }
}

export default authService;