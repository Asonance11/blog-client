import IComment from './comment.type';
import IUser from './user.type';

interface IPost {
	_id: string;
	title: string;
	content: string;
	user: IUser;
	comments: IComment[];
	published: boolean;
}
export default IPost;
