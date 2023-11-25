import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Layout from '../components/Layout';
import { signup } from '../services/axios';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			await signup(username, password, confirmPassword);
			toast.success('Successfully signed up!');
			navigate('/login');
		} catch (error) {
			if (error instanceof Error) {
				console.error(error);
				toast.error(error.message);
			} else {
				console.error('An unexpected error occurred:', error);
				toast.error('An unexpected error occurred. Please try again.');
			}
		}
	};

	return (
		<Layout>
			<section className="min-h-screen flex items-center justify-center bg-neutral-50">
				<form
					className="bg-white shadow-md rounded-md p-8 max-w-md w-full"
					onSubmit={handleSubmit}
				>
					<h2 className="text-2xl font-bold mb-6">Sign Up</h2>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Username
						</label>
						<input
							type="text"
							name="username"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow"
							placeholder="Enter your username"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow"
							placeholder="Enter your password"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="confirm_password"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Confirm Password
						</label>
						<input
							type="password"
							name="confirm_password"
							id="confirm_password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow"
							placeholder="Confirm your password"
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline hover:bg-blue-600 transition duration-150 ease-in-out"
					>
						Sign Up
					</button>
				</form>
			</section>
		</Layout>
	);
};

export default Signup;
