import axios from "axios";

const url = process.env.API_URL as string;

export interface IPost {
  _id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  user: { username: string };
  createdAt: string;
}

export const getLatestPosts = async (): Promise<IPost[] | undefined> => {
  try {
    const response = await axios.get(`${url}/posts/latest`);
    return response.data;
  } catch (error) {
    console.log("Error getting latest posts", error);
  }
};
