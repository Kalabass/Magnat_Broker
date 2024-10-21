import { useBanks } from '@/entities/bank';
import useIsMortgageType from '@/shared/lib/hooks/useIsMortgage';
import InputController from '@/shared/ui/Controllers/NumberInputController';
import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CustomSelect from '../../../../shared/ui/CustomSelectRef';
import { FormFieldNamesMap } from '../../constants/FormFieldNames';
import CustomStyledPaper from '../common/StyledPaper';

const ObjectBlock: FC = () => {
	const { data: BANKS } = useBanks();
	const { control } = useFormContext();
	const isMortgage = useIsMortgageType();
	return (
		<CustomStyledPaper>
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
								<InputController
									name={FormFieldNamesMap.insuranceObjectName}
									rules={{
										required: isMortgage ? false : 'Введите название объекта',
									}}
								/>
							</Grid>
						</>

						<Grid item xs={4}>
							<Typography>Страховая сумма</Typography>
						</Grid>
						<Grid item xs={8}>
							<InputController
								name={FormFieldNamesMap.blankSum}
								rules={{ required: 'Введите страховую сумму' }}
								type='number'
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
									<InputController
										name={FormFieldNamesMap.insuranceObjectHorsePowers}
										rules={{
											required: 'Введите кол-во лошадиных сил',
										}}
										type='number'
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
		</CustomStyledPaper>
	);
};

export default ObjectBlock;
