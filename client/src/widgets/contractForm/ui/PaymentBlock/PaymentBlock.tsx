import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

import useIsCashPaymentType from '@/shared/lib/hooks/useIsCashPaymentType';
import InputController from '@/shared/ui/Controllers/NumberInputController';
import { PaymentTypesSelect } from '@/widgets/PaymentTypesSelect';
import { FormFieldNamesMap } from '../../constants/FormFieldNames';
import CustomStyledPaper from '../common/StyledPaper';

const PaymentBlock: FC = () => {
	const isCash = useIsCashPaymentType();
	return (
		<CustomStyledPaper>
			<Grid container spacing={5} sx={{ paddingBottom: '40px' }}>
				<Grid
					item
					container
					spacing={1}
					xs={6}
					justifyContent='center'
					alignItems='center'
				>
					<Grid item xs={4}>
						<Typography>страховая премия</Typography>
					</Grid>
					<Grid item xs={8}>
						<InputController
							name={FormFieldNamesMap.blankPremium}
							rules={{ required: 'Введите премию' }}
							type='number'
						/>
					</Grid>
				</Grid>
				<Grid
					item
					container
					xs={6}
					spacing={1}
					justifyContent='center'
					alignItems='center'
				>
					<PaymentTypesSelect />

					{isCash && (
						<>
							<Grid item xs={4}>
								<Typography>Почта</Typography>
							</Grid>
							<Grid item xs={8}>
								<InputController
									name={FormFieldNamesMap.blankEmail}
									rules={{ required: 'Введите почту' }}
									type='email'
								/>
							</Grid>
						</>
					)}
				</Grid>
			</Grid>
		</CustomStyledPaper>
	);
};

export default PaymentBlock;
