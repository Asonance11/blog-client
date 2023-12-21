interface Proptype {
	title: string;
	username: string;
}

const Post = (props: Proptype) => {
	return (
		<div className="bg-neutral-50 shadow-md p-6 rounded-lg w-full">
			<h2 className="text-xl font-bold mb-2">{props.title}</h2>
			<p className="text-gray-600">
				Created by: <span className="font-bold">{props.username}</span>
			</p>
		</div>
	);
};

export default Post;
