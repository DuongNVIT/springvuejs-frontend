import axiosClient from "./axiosClient";

const productService = {
    async getAll(page, size) {
        try {
            const url = `/products?page=${page}&size=${size}`;
            const response = await axiosClient.get(url);
            return response
        } catch (err) {
            alert(err.message);
        }
    },
    
    async getProductsByCategory(categoryCode, page, size) {
        const url = `/products/${categoryCode}?page=${page}&size=${size}`;
        const response = await axiosClient.get(url);
        console.log(response);
        return response;
    },

    async createOrUpdate(param) {
        const url = `/admin/products`;
        const response = await axiosClient.post(url, param);
        console.log(response);
        return response;
    },

    async getByName(productName, newPage) {
        console.log(productName);
        const url = `/products/search?productName=${productName}&page=${newPage}&size=3`;
        console.log(url)
        const response = await axiosClient.get(url);
        return response;
    },

    async delete(productId) {
        const url = `/admin/products/${productId}`;
        const response = await axiosClient.delete(url);
        return response;
    }

}

export default productService