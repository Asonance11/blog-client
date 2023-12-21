import { AxiosError } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import { login } from '../services/axios';

interface ResponseData {
	errors: string[] | { msg: string }[];
}

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			setLoading(true);
			const response = await login(username, password);
			console.log(response);
			localStorage.setItem('token', response.token);
			localStorage.setItem('user', JSON.stringify(response.user));
			toast.success('Successfully logged in!');
			navigate('/');
		} catch (error) {
			console.error('Error in handleSubmit:', error);
			const axiosError = error as AxiosError<ResponseData>;

			axiosError.response?.data?.errors?.forEach(
				(error: string | { msg: string }) => {
					if (typeof error === 'string') {
						toast.error(error);
					} else if (error.msg) {
						toast.error(error.msg);
					}
				}
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Layout>
			<section className="min-h-screen flex items-center justify-center bg-neutral-50">
				<form
					className="bg-white shadow-md rounded-md p-8 max-w-md w-full"
					onSubmit={handleSubmit}
				>
					<h2 className="text-2xl font-bold mb-6">Log in</h2>
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
					<div className="mb-6">
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
					<button
						type="submit"
						className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline hover:bg-blue-600 transition duration-150 ease-in-out"
					>
						{loading ? <Loader /> : 'Log in'}
					</button>
				</form>
			</section>
		</Layout>
	);
};

export default Login;
