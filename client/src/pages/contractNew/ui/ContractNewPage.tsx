import {
	IMutationData,
	useCreateBlankMutation,
} from '@/entities/blank/lib/useCreateBlank.mutation';
import { IMutationDataResponse } from '@/shared/api/services/blankService';
import { Box, Button, Container } from '@mui/material';
import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ClientBlock from './ClientBlock/ClientBlock';
import GeneralInfoBlock from './GeneralInfoBlock/GeneralInfoBlock';
import ObjectBlock from './ObjectBlock/ObjectBlock';
import PaymentBlock from './PaymentBlock/PaymentBlock';

interface IPENIS {
	initialData?: IMutationDataResponse;
}

export const ContractNewPage: FC<IPENIS> = ({ initialData }) => {
	const createBlankMutation = useCreateBlankMutation();

	const navigate = useNavigate();

	const formMethods = useForm<IMutationDataResponse>({
		defaultValues: {
			...initialData,
		},
	});

	const onSubmit: SubmitHandler<IMutationData> = (data) => {
		console.log(data);
		createBlankMutation.mutate(data);
		if (createBlankMutation.isSuccess) navigate('/contracts');
	};

	return (
		<Container
			sx={{
				background: ' rgb(203, 234, 244)',
				padding: '40px 0 40px 0 ',
				marginTop: '64px',
			}}
		>
			<FormProvider {...formMethods}>
				<Box
					component={'form'}
					sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
					onSubmit={formMethods.handleSubmit(onSubmit)}
				>
					<GeneralInfoBlock />
					<ClientBlock />
					<ObjectBlock />
					<PaymentBlock />
					<Button
						sx={{ alignSelf: 'end' }}
						type='submit'
						disabled={createBlankMutation.isPending ? true : false}
						variant='contained'
					>
						Сохранить
					</Button>
				</Box>
			</FormProvider>
		</Container>
	);
};
