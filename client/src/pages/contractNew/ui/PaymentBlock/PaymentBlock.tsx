import { useBlankStore } from '@/shared/stores/useBlankStore';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { FC } from 'react';

import { useInsuranceObjectStore } from '@/shared/stores/useInsuranceObjectStore';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { Controller, useFormContext } from 'react-hook-form';
import CustomSelect from '../GeneralInfoBlock/CustomSelect';
import { itemData } from '../GeneralInfoBlock/GeneralInfoBlock';

const PAYMENT_TYPES: itemData[] = [
	{ id: 0, name: 'ibox' },
	{ id: 1, name: 'Наличные' },
	{ id: 2, name: 'По ссылке' },
];

const PaymentBlock: FC = () => {
	const { getBlank, updateBlankField } = useBlankStore();
	const { updateInsuranceObjectField } = useInsuranceObjectStore();
	const blank = getBlank();
	const { control } = useFormContext();
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
								name='premium'
								control={control}
								rules={{ required: 'Введите премию' }}
								defaultValue={undefined}
								render={({ field, fieldState: { error } }) => (
									<CustomTextFieldRef
										error={!!error}
										helperText={error?.message}
										{...field}
										value={field.value ?? undefined}
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
						<Grid item xs={4}>
							<Typography>Способ оплаты</Typography>
						</Grid>
						<Grid item xs={8}>
							<Controller
								name='premium'
								control={control}
								rules={{ required: 'Выберите способ оплаты' }}
								defaultValue={undefined}
								render={({ field: { onChange }, fieldState: { error } }) => (
									<CustomSelect
										error={!!error}
										formHelperText={error?.message}
										items={PAYMENT_TYPES}
										onChangeHandler={(value) => {
											onChange(value);
											updateBlankField('paymentType', Number(value));
										}}
									/>
								)}
							/>
						</Grid>
						{/* TODO: подгружать почту из текущего клиента */}
						{blank.paymentType === 1 && (
							<>
								<Grid item xs={4}>
									<Typography>Почта</Typography>
								</Grid>
								<Grid item xs={8}>
									<Controller
										name='email'
										control={control}
										rules={{ required: 'Введите почту' }}
										defaultValue={undefined}
										render={({ field, fieldState: { error } }) => (
											<CustomTextFieldRef
												type='email'
												error={!!error}
												helperText={error?.message}
												{...field}
												value={field.value ?? undefined}
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
