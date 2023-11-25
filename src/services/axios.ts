import axios from 'axios';
import IPost from '../types/post.type';

const URL = import.meta.env.VITE_API_URL as string;

export const getAllPosts = async (): Promise<IPost[]> => {
	try {
		const response = await axios.get(`${URL}/posts`);
		return response.data;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const signup = async (
	username: string,
	password: string,
	confirm_password: string
) => {
	// try {
	const response = await axios.post(`${URL}/signup`, {
		username,
		password,
		confirm_password,
	});
	return response.data;
	// } catch (error) {
	// 	console.error(error);
	// 	return [];
	// }
};
