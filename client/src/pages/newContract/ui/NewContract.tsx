import { useCreateBlankMutation } from '@/entities/blank/lib/useCreateBlank.mutation';

import { MutationData } from '@/shared/model/blanksInterfaces';
import CustomStyledContainer from '@/shared/ui/StyledContainer';
import { ContractForm, ENUM_MODE } from '@/widgets/contractForm';

import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const NewContractPage: FC = () => {
	const createBlankMutation = useCreateBlankMutation();
	const navigate = useNavigate();
	const onSubmitHandler: SubmitHandler<MutationData> = (data) => {
		createBlankMutation.mutate(data);
		if (createBlankMutation.isSuccess) navigate('/contracts');
	};

	return (
		<CustomStyledContainer>
			<ContractForm mode={ENUM_MODE.new} onSubmitHandler={onSubmitHandler} />
		</CustomStyledContainer>
	);
};
