import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { getAllPosts } from '../services/axios';
import IPost from '../types/post.type';
import Loader from './Loader';
import Post from './Post';

const Posts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState<IPost[]>([]);

	const fetchPosts = async () => {
		try {
			setIsLoading(true);
			const response = await getAllPosts();
			setPosts(response);
		} catch (error) {
			if (error instanceof Error) {
				console.error(error);
				toast.error(error.message);
			} else {
				console.error('An unexpected error occurred:', error);
				toast.error('An unexpected error occurred. Please try again.');
			}
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<section>
			<h2 className="mt-6 text-center text-2xl">Posts</h2>
			<div className="flex flex-col gap-8 px-6 lg:container">
				{isLoading && <Loader />}
				{!isLoading &&
					(posts
						? posts.length === 0 && (
								<p className="text-center mt-4">No posts found</p>
						  )
						: null)}
				{posts &&
					posts.map((post) => (
						<Link key={post._id} to={`posts/${post._id}`}>
							<Post
								key={post._id}
								title={post.title}
								username={post.user.username}
							/>
						</Link>
					))}
			</div>
		</section>
	);
};

export default Posts;
