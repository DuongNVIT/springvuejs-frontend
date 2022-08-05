import axiosClient from "./axiosClient";

const categoryService = {
    getAll: () => {
        const url = "/categories";
        const response = axiosClient.get(url);
        return response;
    }
}

export default categoryService;