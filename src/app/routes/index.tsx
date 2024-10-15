import { MainLayout } from '@/app/layouts/MainLayout';
import { RouterProvider as ReactRouterProvider, createBrowserRouter } from 'react-router-dom';

import { Dashboard } from '@/pages/Dashboard';
import { NotFound } from '@/pages/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Dashboard />,
			},

			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
]);

export const RouterProvider = () => {
	return <ReactRouterProvider router={router} />;
};
