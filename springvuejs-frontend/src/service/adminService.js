import axiosClient from "./axiosClient";

const adminService = {
	getAllProducts: async () => {
		const url = "/admin/products";
		const response = await axiosClient.get(url);
		return response;
	},
	getAllStatus: async () => {
		const url = "/admin/products/status";
		const response = await axiosClient.get(url);
		return response;
	},
	updateStatus: async (userProductId, statusId) => {
		console.log(userProductId, statusId);
		const url = `/admin/products/status?userProductId=${userProductId}&statusId=${statusId}`;
		console.log(url);
		const response = await axiosClient.put(url);
		return response;
	},
	getAllBill: async () => {
		const url = "/admin/bill";
		const response = await axiosClient.get(url);
	}
}

export default adminService;