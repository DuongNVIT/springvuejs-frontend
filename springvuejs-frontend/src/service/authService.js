import axiosClient from "./axiosClient";

const authService = {
    login: async (params) => {
        const url = "/api/signin"
        var response = await axiosClient.post(url, params);
        console.log(response);
        return response;
    },

    signup: async (params) => {
        const url = "/api/signup";
        console.log("vao signup api");
        var response = await axiosClient.post(url, params);
        console.log("signup xong");
        return response;
    }
}

export default authService;