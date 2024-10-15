import { IMutationData } from '@/entities/blank/lib/useCreateBlank.mutation';
import { ENUM_MODE } from '@/pages/viewContract/ui/ViewContract';
import { IMutationDataResponse } from '@/shared/api/services/blankService';
import { Box, Button, Container } from '@mui/material';
import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import ClientBlock from './ClientBlock/ClientBlock';
import GeneralInfoBlock from './GeneralInfoBlock/GeneralInfoBlock';
import ObjectBlock from './ObjectBlock/ObjectBlock';
import PaymentBlock from './PaymentBlock/PaymentBlock';

interface ContractNewPageProps {
	mode: ENUM_MODE;
	initialData?: IMutationDataResponse;
	onSubmitHandler: SubmitHandler<IMutationData>;
}

export const ContractNewPage: FC<ContractNewPageProps> = ({
	initialData,
	mode,
	onSubmitHandler,
}) => {
	const inidata2: IMutationData | undefined = initialData
		? {
				...initialData,
				clientBirthDate: new Date(initialData.clientBirthDate),
				blankConclusionDate: new Date(initialData.blankConclusionDate),
				blankActiveDateStart: new Date(initialData.blankActiveDateStart),
				blankActiveDateEnd: new Date(initialData.blankActiveDateEnd),
				blankUseDateStart: new Date(initialData.blankUseDateStart),
				blankUseDateEnd: new Date(initialData.blankUseDateEnd),
		  }
		: undefined;
	const formMethods = useForm<IMutationData>({
		defaultValues: inidata2,
	});

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
					onSubmit={formMethods.handleSubmit(onSubmitHandler)}
				>
					<GeneralInfoBlock />
					<ClientBlock />
					<ObjectBlock />
					<PaymentBlock />
					{/* TODO: поменять тернарный оператор на объект */}
					<Button sx={{ alignSelf: 'end' }} type='submit' variant='contained'>
						{mode === ENUM_MODE.new
							? 'создать'
							: mode === ENUM_MODE.view
							? 'редактировать'
							: 'сохранить'}
					</Button>
				</Box>
			</FormProvider>
		</Container>
	);
};
