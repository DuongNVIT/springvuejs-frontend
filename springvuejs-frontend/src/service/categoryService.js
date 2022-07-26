import axiosClient from "./axiosClient";

const categoryService = {
    getAll: () => {
        const url = "/api/categories";
        const response = axiosClient.get(url);
        return response;
    }
}

export default categoryService;