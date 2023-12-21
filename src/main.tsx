import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import App from './App.tsx';
import './index.css';
import CreatePost from './pages/CreatePost.tsx';
import Login from './pages/Login.tsx';
import Post from './pages/Post.tsx';
import Signup from './pages/Signup.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <Signup />,
	},
	{
		path: '/posts/:id',
		element: <Post />,
	},
	{
		path: 'create',
		element: <CreatePost />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<Toaster richColors />
	</React.StrictMode>
);
