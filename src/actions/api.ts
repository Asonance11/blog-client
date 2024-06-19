import axios from "axios";
import { toast } from "sonner";

const url = process.env.API_URL as string;

export interface IUser {
  username: string;
  password: string;
}

export interface IPost {
  _id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  user: { username: string };
  createdAt: string;
}

// Users

export const login = async (data: IUser) => {
  try {
    const response = await axios.post(`${url}/login`, data);
    const { token } = response.data;
    localStorage.setItem("token", token);
  } catch (error) {
    console.log("Error logging in", error);
    toast.error("Invalid email or password");
  }
};

export const getLatestPosts = async (): Promise<IPost[] | undefined> => {
  try {
    const response = await axios.get(`${url}/posts/latest`);
    return response.data;
  } catch (error) {
    console.log("Error getting latest posts", error);
  }
};

export const getPostById = async (
  postId: string,
): Promise<IPost | undefined> => {
  try {
    const response = await axios.get(`${url}/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.log("Error getting post", error);
  }
};
