import axiosClient from "./axiosClient";

const authAPI = {
    login: async (params) => {
        try {
            var url = "/authenticate"
            console.log("vao authAPI")
            var response = await axiosClient.post(url, params);
            console.log(response);
            return response;
        } catch (err) {
            console.log(err);
            alert("Error: " + err.message);
            return null;
        }
    }
}

export default authAPI;