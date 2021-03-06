import axiosClient from "./axiosClient";

const productService = {
    async getAll(page, size) {
        try {
            const url = `/api/products?page=${page}&size=${size}`;
            const response = await axiosClient.get(url);
            return response
        } catch (err) {
            alert(err.message);
        }
    },
    
    async getProductsByCategory(categoryCode) {
        const url = `/api/products/${categoryCode}`;
        const response = await axiosClient.get(url);
        console.log(response);
        return response;
    },

    async create(param) {
        const url = `/api/products`;
        const response = await axiosClient.post(url, param);
        console.log(response);
        return response;
    },

    async getByName(name) {
        console.log(name);
        const url = `/api/products/search/${name}`;
        console.log(url)
        const response = await axiosClient.get(url);
        return response;
    }


}

export default productService