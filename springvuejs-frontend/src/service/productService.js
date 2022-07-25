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
    }
}


export default productService