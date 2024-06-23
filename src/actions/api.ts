import axios from "axios";
import { toast } from "sonner";

const url = "http://localhost:8000/api";

export interface IUser {
  username: string;
  password: string;
}

export interface IUserSignup {
  username: string;
  password: string;
  confirm_password: string;
}

export interface IPost {
  _id?: string;
  title: string;
  description: string;
  content: any;
  imageUrl: string;
  user: { username: string };
  createdAt?: string;
}

export interface IPostData {
  title: string;
  description: string;
  content: any;
  imageUrl: string;
  published: boolean;
}

// Users

export const login = async (data: IUser) => {
  try {
    const response = await axios.post(`http://localhost:8000/api/login`, data);
    const { token, user } = response.data;
    localStorage.setItem("token", token);
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

export const signup = async (data: IUser) => {
  try {
    const response = await axios.post(`${url}/signup`, data);
    return response.data;
  } catch (error: any) {
    console.log("Error signing up", error);
    if (error.response && error.response.data && error.response.data.errors) {
      error.response.data.errors.forEach((err: any) => {
        toast.error(err.msg);
      });
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

export const createPost = async (data: IPostData) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(`${url}/posts`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 201) {
      toast.success("Post created successfully");
      return response.data.post;
    }
  } catch (error: any) {
    console.log("Error creating post:", error);

    if (error.response && error.response.data) {
      const errorMessage =
        error.response.data.message || "Failed to create post";
      toast.error(errorMessage);
    } else {
      toast.error("An error occurred while creating the post");
    }
  }
};
