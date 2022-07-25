import axiosClient from "./axiosClient";

const categoryService = {
    getAll: () => {
        try {
            const url = "/api/categories";
            const response = axiosClient.get(url);
            return response;
        } catch (error) {
            alert(error.message);
            return error;
        }
    } 
}

export default categoryService;