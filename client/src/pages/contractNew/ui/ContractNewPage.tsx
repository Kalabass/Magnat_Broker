import { useCreateBlankMutation } from '@/entities/blank/lib/useCreateBlank.mutation';
import { BlankData, useBlankStore } from '@/shared/stores/useBlankStore';
import { useClientStore } from '@/shared/stores/useClientStore';
import { useInsuranceObjectStore } from '@/shared/stores/useInsuranceObjectStore';
import { Box, Button, Container } from '@mui/material';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ClientBlock from './ClientBlock/ClientBlock';
import GeneralInfoBlock from './GeneralInfoBlock/GeneralInfoBlock';
import ObjectBlock from './ObjectBlock/ObjectBlock';
import PaymentBlock from './PaymentBlock/PaymentBlock';

export const ContractNewPage: FC = () => {
	const createBlankMutation = useCreateBlankMutation();

	const { getBlank } = useBlankStore();
	const { getInsuranceObject } = useInsuranceObjectStore();
	const { getClient } = useClientStore();

	const blank = getBlank();
	const client = getClient();
	const insuranceObject = getInsuranceObject();

	const navigate = useNavigate();

	const [buttonDisabled, setButtonDisabled] = useState(false);

	interface NewBlank extends BlankData {}

	const formMethods = useForm<NewBlank>({
		defaultValues: {
			insuranceCompanyId: undefined,
		},
	});

	const onSubmit = () => {
		createBlankMutation.mutate({ blank, client, insuranceObject });
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
