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
    const response = await axios.post(`http://localhost:8000/api/login`, data);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
    toast.success("Log in Successful");
    return user;
  } catch (error: any) {
    console.error("Error logging in", error);
    if (error.response && error.response.data && error.response.data.errors) {
      error.response.data.errors.forEach((err: any) => toast.error(err.msg));
    } else {
      toast.error("An unexpected error occurred");
    }
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
