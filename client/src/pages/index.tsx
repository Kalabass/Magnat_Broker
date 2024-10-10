import { AppRoutes } from '@/shared/const/AppRoutes';
import { createBrowserRouter } from 'react-router-dom';
import { AuthPage } from './auth';
import { ContractsPage } from './contracts';
import { EditContractPage } from './editContract';
import { ErrorPage } from './errorPage';
import { MainPage } from './main';

import { NewContractPage } from './newContract';
import { ProfilePage } from './profile';
import { ViewContractPage } from './viewContract';
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
				path: AppRoutes.CONTRACT_NEW,
				element: <NewContractPage />,
			},
			{
				path: AppRoutes.CONTRACT_VIEW,
				element: <ViewContractPage />,
			},
			{
				path: AppRoutes.CONTRACT_EDIT,
				element: <EditContractPage />,
			},
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
