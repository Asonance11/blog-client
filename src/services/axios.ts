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
