import axiosClient from "./axiosClient";

const authService = {
    login: async (params) => {
        try {
            var url = "/api/signin"
            console.log("vao authAPI")
            var response = await axiosClient.post(url, params);
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
            alert("Error: " + err.message);
            return null;
        }
    },

    signup: async (params) => {
        try {
            const url = "/api/signup";
            console.log("vao signup api");
            var response = await axiosClient.post(url, params);
            return response;
        } catch(err) {
            return err.response.data;
        }
    }
}

export default authService;