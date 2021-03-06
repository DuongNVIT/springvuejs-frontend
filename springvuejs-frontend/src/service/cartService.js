import axiosClient from "./axiosClient";

const cartService = {
    getCart: async (userid) => {
        const url = `/api/products/cart/${userid}`;
        const response = await axiosClient.get(url);
        return response;
    }
}

export default cartService;