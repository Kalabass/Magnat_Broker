import { useProcessedBlankById } from '@/entities/blank';
import { ContractNewPage } from '@/pages/contractNew';
import { FC } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export enum ENUM_MODE {
	view = 'view',
	new = 'new',
	edit = 'edit',
}

export const ViewContractPage: FC = () => {
	const { id } = useParams<{ id: string }>();
	//TODO: Добавить обработку исключений
	const { data: BLANK_DATA } = useProcessedBlankById(+id!);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const onSubmitHandler = () => {
		navigate(`${pathname}/edit`);
	};
	return (
		BLANK_DATA && (
			<ContractNewPage
				initialData={BLANK_DATA}
				mode={ENUM_MODE.view}
				onSubmitHandler={onSubmitHandler}
			/>
		)
	);
};
