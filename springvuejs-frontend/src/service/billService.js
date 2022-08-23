import axiosClient from "./axiosClient";

const billService = {
	getAllBills: async () => {
		const url = "/bills"
		const response = await axiosClient.get(url);
		return response;
	}
}

export default billService;