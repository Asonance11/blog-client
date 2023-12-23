import { AxiosError } from 'axios';
import DOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import Loader from '../components/Loader';
import { getPost } from '../services/axios';
import IPost from '../types/post.type';
interface ResponseData {
	error: string;
}

const Post: React.FC = () => {
	const [post, setPost] = useState<IPost | null>(null);
	const { id } = useParams();

	const fetchOnePost = async () => {
		try {
			const response = await getPost(id);
			setPost(response);
		} catch (error) {
			console.error(error);
			const axiosError = error as AxiosError<ResponseData>;

			toast.error(axiosError.response?.data?.error);
		}
	};

	useEffect(() => {
		fetchOnePost();
	}, []);

	return (
		<section className="container mx-auto p-4">
			{post ? (
				<article className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-md">
					<h2 className="text-3xl font-bold mb-4">{post.title}</h2>
					<div
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(post.content),
						}}
						className="text-gray-700"
					></div>
				</article>
			) : (
				<div className="flex items-center justify-center h-64">
					<Loader />
				</div>
			)}
		</section>
	);
};

export default Post;
