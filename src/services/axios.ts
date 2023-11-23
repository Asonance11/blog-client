import axios from 'axios';

const URL = import.meta.env.VITE_API_URL;

export const getAllPosts = async () => {
	try {
		const response = await axios.get(`${URL}/posts`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
