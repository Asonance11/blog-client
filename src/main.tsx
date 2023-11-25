import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import App from './App.tsx';
import './index.css';
import Login from './pages/Login.tsx';
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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
		<Toaster richColors />
	</React.StrictMode>
);
