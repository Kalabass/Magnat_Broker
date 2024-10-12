import {
	IMutationData,
	useCreateBlankMutation,
} from '@/entities/blank/lib/useCreateBlank.mutation';
import { ContractNewPage } from '@/pages/contractNew';
import { ENUM_MODE } from '@/pages/viewContract/ui/ViewContract';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const NewContractPage: FC = () => {
	const createBlankMutation = useCreateBlankMutation();
	const navigate = useNavigate();
	const onSubmitHandler: SubmitHandler<IMutationData> = (data) => {
		createBlankMutation.mutate(data);
		if (createBlankMutation.isSuccess) navigate('/contracts');
	};
	return (
		<ContractNewPage mode={ENUM_MODE.new} onSubmitHandler={onSubmitHandler} />
	);
};
