import { IMutationData } from '@/entities/blank/lib/useCreateBlank.mutation';
import { Box, Button, Grid, Paper } from '@mui/material';
import { FC } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import SettingsBlockLeft from './SettingsBlockLeft';
import SettingsBlockMiddle from './SettingsBlockMiddle';
import SettingsBlockRight from './SettingsBlockRight';

const SettingsBlock: FC = () => {
	const formMethods = useForm<Partial<IMutationData>>({});

	const onSubmit: SubmitHandler<Partial<IMutationData>> = (data) => {
		data;
	};
	return (
		<Paper component={'section'} sx={{ borderRadius: '10px', padding: 5 }}>
			<FormProvider {...formMethods}>
				<Box
					component={'form'}
					sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
					onSubmit={formMethods.handleSubmit(onSubmit)}
				>
					<Grid container spacing={5}>
						<SettingsBlockLeft />
						<SettingsBlockMiddle />
						<SettingsBlockRight />
					</Grid>
					<Button type='submit' variant='contained' sx={{ alignSelf: 'end' }}>
						обновить
					</Button>
				</Box>
			</FormProvider>
		</Paper>
	);
};

export default SettingsBlock;
