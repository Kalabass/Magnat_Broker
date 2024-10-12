import { Box, Grid, Paper, Typography } from '@mui/material';
import { ChangeEvent, FC } from 'react';

import useIsCashPaymentType from '@/shared/lib/hooks/useIsCashPaymentType';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { PaymentTypesSelect } from '@/widgets/PaymentTypesSelect';
import { Controller, useFormContext } from 'react-hook-form';
import { FormFieldNamesMap } from '../../constants/FormFieldNames';

const PaymentBlock: FC = () => {
	const { control } = useFormContext();
	const isCash = useIsCashPaymentType();
	return (
		<Paper component={'section'} sx={{ borderRadius: '10px', padding: '40px' }}>
			<Box component={'section'}>
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
							<Controller
								name={FormFieldNamesMap.blankPremium}
								control={control}
								rules={{ required: 'Введите премию' }}
								defaultValue={undefined}
								render={({ field, fieldState: { error } }) => (
									<CustomTextFieldRef
										error={!!error}
										helperText={error?.message}
										{...field}
										value={field.value ?? ''}
										onChange={(e: ChangeEvent<HTMLInputElement>) => {
											field.onChange(Number(e.target.value));
										}}
									/>
								)}
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
									<Controller
										name={FormFieldNamesMap.blankEmail}
										control={control}
										rules={{ required: 'Введите почту' }}
										defaultValue={undefined}
										render={({ field, fieldState: { error } }) => (
											<CustomTextFieldRef
												type='email'
												error={!!error}
												helperText={error?.message}
												{...field}
												value={field.value ?? ''}
											/>
										)}
									/>
								</Grid>
							</>
						)}
					</Grid>
				</Grid>
			</Box>
		</Paper>
	);
};

export default PaymentBlock;
