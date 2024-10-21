import {
	MutationData,
	MutationDataResponse,
} from '@/shared/model/blanksInterfaces';
import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ENUM_MODE } from '../constants/contractFormModes';
import ClientBlock from './ClientBlock/ClientBlock';
import GeneralInfoBlock from './GeneralInfoBlock/GeneralInfoBlock';
import ObjectBlock from './ObjectBlock/ObjectBlock';
import PaymentBlock from './PaymentBlock/PaymentBlock';

interface ContractNewPageProps {
	mode: ENUM_MODE;
	initialData?: MutationDataResponse;
	onSubmitHandler: SubmitHandler<MutationData>;
}

export const ContractForm: FC<ContractNewPageProps> = ({
	initialData,
	mode,
	onSubmitHandler,
}) => {
	const processedInitialData: MutationData | undefined = initialData
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
	const formMethods = useForm<MutationData>({
		defaultValues: processedInitialData,
	});

	return (
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
				<Button sx={{ alignSelf: 'end' }} type='submit' variant='contained'>
					{mode === ENUM_MODE.new
						? 'создать'
						: mode === ENUM_MODE.view
						? 'редактировать'
						: 'сохранить'}
				</Button>
			</Box>
		</FormProvider>
	);
};
