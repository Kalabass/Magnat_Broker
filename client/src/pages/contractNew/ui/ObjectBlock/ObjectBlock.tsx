import { useBanks } from '@/entities/bank';
import { useBlankStore } from '@/shared/stores/useBlankStore';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CustomSelect from '../GeneralInfoBlock/CustomSelect';

const ObjectBlock: FC = () => {
	const { getBlank } = useBlankStore();
	const blank = getBlank();

	const { data: BANKS } = useBanks();
	const { control } = useFormContext();
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
						{/* TODO: что-то сделать с этим безобразием */}
						{blank.insuranceTypeId !== 4 && (
							<>
								<Grid item xs={4}>
									Название
								</Grid>
								<Grid item xs={8}>
									{/* TODO: сделать обязательным, когда страхование не ипотека */}
									<Controller
										name='insuranceObjectName'
										control={control}
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
							</>
						)}
						<Grid item xs={4}>
							<Typography>Страховая сумма</Typography>
						</Grid>
						<Grid item xs={8}>
							<Controller
								name='sum'
								control={control}
								defaultValue={undefined}
								rules={{ required: 'Введите страховую сумму' }}
								render={({ field, fieldState: { error } }) => (
									<CustomTextFieldRef
										type='number'
										error={!!error}
										helperText={error?.message}
										{...field}
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
						{blank.insuranceTypeId !== 4 && (
							<>
								<Grid item xs={4}>
									Мощность
								</Grid>
								<Grid item xs={8}>
									<Controller
										name='insuranceObjectHorsePowers'
										control={control}
										defaultValue={undefined}
										rules={{ required: 'Введите кол-во лошадиных сил' }}
										render={({ field, fieldState: { error } }) => (
											<CustomTextFieldRef
												type='number'
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
						{BANKS && (
							<>
								<Grid item xs={4}>
									<Typography>Банк</Typography>
								</Grid>
								<Grid item xs={8}>
									<Controller
										name='bankId'
										control={control}
										render={({ field: { onChange } }) => (
											<CustomSelect
												items={BANKS}
												onChangeHandler={(selectedValue) => {
													onChange(selectedValue);
												}}
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

export default ObjectBlock;
