import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { getAllPosts } from '../services/axios';
import IPost from '../types/post.type';
import Loader from './Loader';

const Posts = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [posts, setPosts] = useState<IPost[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setIsLoading(true);
				const response = await getAllPosts();
				console.log(response);
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

		fetchPosts();
	}, []);

	return (
		<section>
			<h2>Posts</h2>
			<div>
				{isLoading && <Loader />}
				{!isLoading &&
					(posts ? posts.length === 0 && <p>No posts found</p> : null)}
				{posts &&
					posts.map((post) => (
						<React.Fragment key={post?._id}>
							<h2>{post?.title}</h2>
							<p>{post?.user.username}</p>
						</React.Fragment>
					))}
			</div>
		</section>
	);
};

export default Posts;
