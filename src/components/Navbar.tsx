import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Navbar = () => {
	const navigate = useNavigate();

	const isUserLoggedIn = () => {
		const token = localStorage.getItem('token');
		return !!token;
	};

	const logout = () => {
		localStorage.removeItem('token');
		toast.success('Successfully logged out!');
		navigate('/');
	};

	return (
		<nav className=" bg-gray-800 p-4 flex items-center justify-between px-8 sticky">
			<div className="">
				<h1 className="text-white text-2xl">
					<Link to="/" className="hover:text-gray-300">
						Blog
					</Link>
				</h1>
			</div>
			<div>
				{isUserLoggedIn() && (
					<ul className="flex items-center justify-between">
						<li className="mr-4">
							<Link to="/create" className="text-white hover:text-gray-300">
								Create Post
							</Link>
						</li>
						<li>
							<button
								onClick={logout}
								className="text-white hover:text-gray-300"
							>
								Logout
							</button>
						</li>
					</ul>
				)}
				{!isUserLoggedIn() && (
					<ul className="flex items-center justify-between">
						<li className="mr-4">
							<Link to="/login" className="text-white hover:text-gray-300">
								Login
							</Link>
						</li>
						<li>
							<Link to="/signup" className="text-white hover:text-gray-300">
								Signup
							</Link>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
