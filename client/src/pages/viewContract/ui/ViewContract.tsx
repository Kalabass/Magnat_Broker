import { useProcessedBlankById } from '@/entities/blank';
import { ContractNewPage } from '@/pages/contractNew';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

export const ViewContractPage: FC = () => {
	const { id } = useParams<{ id: string }>();
	//TODO: Добавить обработку исключений
	const { data: BLANK_DATA } = useProcessedBlankById(+id!);

	return BLANK_DATA && <ContractNewPage initialData={BLANK_DATA} />;
};
