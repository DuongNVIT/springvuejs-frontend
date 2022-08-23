import axiosClient from "./axiosClient";

const cartService = {

    add: async (productId) => {
        const url = `/cart?productId=${productId}`;
        console.log(productId);
        const response = await axiosClient.post(url, {productId});
        return response;
    },

    getCart: async () => {
        const url = `/cart`;
        const response = await axiosClient.get(url);
        return response;
    },

    removeItem: async (userProductId) => {
        const url = `/cart?userProductId=${userProductId}`;
        const response = await axiosClient.delete(url);
        return response;
    },

    order: async (ids) => {
        const url = `/cart`;
        const response = await axiosClient.put(url, ids);
        return response;
    } 
}

export default cartService;