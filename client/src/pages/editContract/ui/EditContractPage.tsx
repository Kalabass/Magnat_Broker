import {
	useProcessedBlankById,
	useUpdateBlankMutation,
} from '@/entities/blank';
import { MutationData } from '@/shared/model/blanksInterfaces';
import CustomStyledContainer from '@/shared/ui/StyledContainer';
import { ContractForm, ENUM_MODE } from '@/widgets/contractForm';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export const EditContractPage: FC = () => {
	const { id } = useParams<{ id: string }>();

	const { data: BLANK_DATA } = useProcessedBlankById(+id!);

	const updateBlankMutation = useUpdateBlankMutation();

	const onSubmitHandler: SubmitHandler<MutationData> = (data) => {
		if (id) {
			updateBlankMutation.mutate({ id: Number(id), data });
		} else {
			console.error('ID is undefined');
		}
	};

	return (
		BLANK_DATA && (
			<CustomStyledContainer>
				<ContractForm
					initialData={BLANK_DATA}
					mode={ENUM_MODE.edit}
					onSubmitHandler={onSubmitHandler}
				/>
			</CustomStyledContainer>
		)
	);
};
