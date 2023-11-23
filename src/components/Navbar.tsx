import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className=" bg-gray-800 p-4 flex items-center justify-between px-8 sticky">
			<div className="container mx-auto">
				<h1 className="text-white text-2xl">
					<Link to="/" className="hover:text-gray-300">
						Blog
					</Link>
				</h1>
			</div>
			<div>
				<ul className="flex">
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
			</div>
		</nav>
	);
};

export default Navbar;
