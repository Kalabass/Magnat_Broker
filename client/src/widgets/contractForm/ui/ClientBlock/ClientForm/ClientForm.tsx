import { CustomToggle } from '@/features/ClientTypeToggle';
import { CLIENT_TYPES } from '@/widgets/contractForm/constants/clinetTypes.const';

import useIsCashPaymentType from '@/shared/lib/hooks/useIsCashPaymentType';
import useIsLegal from '@/shared/lib/hooks/useIsLegal';
import InputController from '@/shared/ui/Controllers/NumberInputController';
import { FormFieldNamesMap } from '@/widgets/contractForm/constants/FormFieldNames';
import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import IndividualFields from './IndividualFields';
import OrganizationFields from './OrganizationFields';

const ClientForm: FC = () => {
	const isLegal = useIsLegal();
	const isCash = useIsCashPaymentType();

	return (
		<Box component={'section'}>
			<Grid
				item
				container
				spacing={1}
				justifyContent='center'
				alignItems='center'
			>
				<Grid item xs={12}>
					<CustomToggle items={CLIENT_TYPES} />
				</Grid>

				{isLegal ? <OrganizationFields /> : <IndividualFields />}

				<Grid item xs={2}>
					<Typography>Номер телефона</Typography>
				</Grid>
				<Grid item xs={4}>
					<InputController
						name={FormFieldNamesMap.clientPhoneNumber}
						type='tel'
					/>
				</Grid>

				<Grid item xs={6} />

				<Grid item xs={2}>
					<Typography>ИНН</Typography>
				</Grid>
				<Grid item xs={4}>
					<InputController
						name={FormFieldNamesMap.clientINN}
						type='number'
						rules={{
							minLength: {
								value: 10,
								message: 'минимальная длина ИНН 10 символов',
							},
							maxLength: {
								value: 12,
								message: 'Максимальная длина ИНН 12 символов',
							},
							required: isCash,
						}}
					/>
				</Grid>

				<Grid item xs={6} />

				<Grid item xs={2}>
					<Typography>Адрес</Typography>
				</Grid>
				<Grid item xs={10}>
					<InputController name={FormFieldNamesMap.clientAddress} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default ClientForm;
