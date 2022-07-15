import axiosClient from "./axiosClient";

const authAPI = {
    login: async (params) => {
        try {
            var url = "/authenticate"
            console.log("vao authAPI")
            var response = await axiosClient.post(url, params);
            return response;
        } catch (err) {
            alert("Error: " + err.message);
            return null;
        }
    }
}

export default authAPI;