import IUser from './user.type';

interface IComment {
	_id: string;
	comment: string;
	user: IUser;
	post: string;
}

export default IComment;
