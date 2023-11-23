import IComment from './comment.type';

interface IPost {
	_id: string;
	title: string;
	content: string;
	user: string;
	comments: IComment[];
	published: boolean;
}
export default IPost;
