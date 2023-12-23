import { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import TextEditor from '../components/TextEditor';
import { createPost } from '../services/axios';
import IPost from '../types/post.type';

interface ResponseData {
	errors: string[] | { msg: string }[];
	message?: string;
}

const token = localStorage.getItem('token') as string;
const currentUser = JSON.parse(localStorage.getItem('user') as string);

const CreatePost = () => {
	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			setLoading(true);

			const post: IPost = {
				title,
				content,
				user: currentUser._id,
				comments: [],
				published: false,
			};

			await createPost(post, token);

			toast.success('Post created successfully');
		} catch (error) {
			console.error('Error in handleSubmit:', error);
			const axiosError = error as AxiosError<ResponseData>;

			axiosError.response?.data?.errors?.forEach(
				(error: string | { msg: string }) => {
					if (typeof error === 'string') {
						toast.error(error);
					} else if (error.msg) {
						toast.error(error.msg);
					}
				}
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Layout>
			<h1 className="text-3xl text-center font-bold my-6">Create Post</h1>
			<form onSubmit={handleSubmit} className="max-w-lg mx-auto">
				<div className="mb-4">
					<label
						htmlFor="title"
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Title
					</label>
					<input
						type="text"
						name="title"
						id="title"
						placeholder="Enter your Title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						className="w-full px-4 py-2 border rounded-md focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="content"
						className="block text-gray-700 text-sm font-bold mb-2"
					>
						Content
					</label>
					{/* <textarea
						name="content"
						id="content"
						placeholder="Enter your Content"
						onChange={(e) => setContent(e.target.value)}
						value={content}
						rows={10}
						className="w-full px-4 py-2 border rounded-md focus:outline-none focus:shadow-outline"
					/> */}
					<TextEditor content={content} setContent={setContent} />
				</div>
				<button
					type="submit"
					className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline hover:bg-blue-600 transition duration-150 ease-in-out"
				>
					{loading ? <Loader /> : 'Create Post'}
				</button>
			</form>
		</Layout>
	);
};

export default CreatePost;
