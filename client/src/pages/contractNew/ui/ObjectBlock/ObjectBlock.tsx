import { useBanks } from '@/entities/bank';
import useIsMortgageType from '@/shared/lib/hooks/useIsMortgage';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CustomSelect from '../../../../shared/ui/CustomSelectRef';
import { FormFieldNamesMap } from '../../constants/FormFieldNames';

const ObjectBlock: FC = () => {
	const { data: BANKS } = useBanks();
	const { control } = useFormContext();
	const isMortgage = useIsMortgageType();
	return (
		<Paper component={'section'} sx={{ borderRadius: '10px', padding: '40px' }}>
			<Box component={'section'}>
				<Grid container spacing={5}>
					<Grid
						container
						item
						xs={6}
						spacing={1}
						justifyContent='center'
						alignItems='center'
					>
						<>
							<Grid item xs={4}>
								Название
							</Grid>
							<Grid item xs={8}>
								<Controller
									name={FormFieldNamesMap.insuranceObjectName}
									control={control}
									defaultValue={undefined}
									rules={{
										required: isMortgage ? false : 'Введите название объекта',
									}}
									render={({ field, fieldState: { error } }) => (
										<CustomTextFieldRef
											error={!!error}
											helperText={error?.message}
											{...field}
											value={field.value ?? ''}
										/>
									)}
								/>
							</Grid>
						</>

						<Grid item xs={4}>
							<Typography>Страховая сумма</Typography>
						</Grid>
						<Grid item xs={8}>
							<Controller
								name={FormFieldNamesMap.blankSum}
								control={control}
								defaultValue={undefined}
								rules={{ required: 'Введите страховую сумму' }}
								render={({ field, fieldState: { error } }) => (
									<CustomTextFieldRef
										type='number'
										error={!!error}
										helperText={error?.message}
										{...field}
										onChange={(e) => {
											field.onChange(Number(e.target.value));
										}}
										value={field.value ?? ''}
									/>
								)}
							/>
						</Grid>
					</Grid>
					<Grid
						container
						item
						xs={6}
						spacing={1}
						justifyContent='center'
						alignItems='center'
					>
						{!isMortgage && (
							<>
								<Grid item xs={4}>
									Мощность
								</Grid>
								<Grid item xs={8}>
									<Controller
										name={FormFieldNamesMap.insuranceObjectHorsePowers}
										control={control}
										defaultValue={undefined}
										rules={{
											required: 'Введите кол-во лошадиных сил',
										}}
										render={({ field, fieldState: { error } }) => (
											<CustomTextFieldRef
												type='number'
												error={!!error}
												helperText={error?.message}
												{...field}
												value={field.value ?? ''}
												onChange={(e) => {
													field.onChange(Number(e.target.value));
												}}
											/>
										)}
									/>
								</Grid>
							</>
						)}
						{BANKS && (
							<>
								<Grid item xs={4}>
									<Typography>Банк</Typography>
								</Grid>
								<Grid item xs={8}>
									<Controller
										name={FormFieldNamesMap.blankBankId}
										control={control}
										render={({ field }) => (
											<CustomSelect {...field} items={BANKS} label='банк' />
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

export default ObjectBlock;
