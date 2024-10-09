import { AppRoutes } from '@/shared/const/AppRoutes';
import { createBrowserRouter } from 'react-router-dom';
import { AuthPage } from './auth';
import { ContractDetailsPage } from './contractDetails';
import { ContractNewPage } from './contractNew';
import { ContractsPage } from './contracts';
import { ErrorPage } from './errorPage';
import { MainPage } from './main';
import { ProfilePage } from './profile';
export const router = createBrowserRouter([
	{
		path: AppRoutes.HOME,
		element: <MainPage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: AppRoutes.CONTRACTS,
				element: <ContractsPage />,
			},
			{
				path: AppRoutes.CONTRACT_CREATION,
				element: <ContractNewPage />,
			},
			{
				path: AppRoutes.CONTRACT_DETAILS,
				element: <ContractDetailsPage />,
			},
			// {
			// 	path: AppRoutes.CONTRACT_EDIT,
			// 	element: < />,
			// },
			{
				path: AppRoutes.AUTH,
				element: <AuthPage />,
			},
			{
				path: AppRoutes.PROFILE,
				element: <ProfilePage />,
			},
		],
	},
]);
