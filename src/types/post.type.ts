import IUser from './user.type';

interface IPost {
	_id?: string;
	title: string;
	content: string;
	user: IUser;
	comments: string[];
	published: boolean;
}
export default IPost;
