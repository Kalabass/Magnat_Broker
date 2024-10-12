import {
	useProcessedBlankById,
	useUpdateBlankMutation,
} from '@/entities/blank';
import { IMutationData } from '@/entities/blank/lib/useCreateBlank.mutation';
import { ContractNewPage } from '@/pages/contractNew';
import { ENUM_MODE } from '@/pages/viewContract/ui/ViewContract';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export const EditContractPage: FC = () => {
	const { id } = useParams<{ id: string }>();
	//TODO: Добавить обработку исключений
	const { data: BLANK_DATA } = useProcessedBlankById(+id!);

	const updateBlankMutation = useUpdateBlankMutation();

	const onSubmitHandler: SubmitHandler<IMutationData> = (data) => {
		updateBlankMutation.mutate({ id: 27, data });
	};

	return (
		BLANK_DATA && (
			<ContractNewPage
				initialData={BLANK_DATA}
				mode={ENUM_MODE.edit}
				onSubmitHandler={onSubmitHandler}
			/>
		)
	);
};
