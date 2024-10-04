import { useBanks } from '@/entities/bank';
import { useBlankStore } from '@/shared/stores/useBlankStore';
import { useInsuranceObjectStore } from '@/shared/stores/useInsuranceObjectStore';
import CustomTextField from '@/shared/ui/CustomTextField';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import CustomSelect from '../GeneralInfoBlock/CustomSelect';
//TODO: объеденить с payment блоком
// const BANKS: itemData[] = [
//   { id: 0, name: 'Сбербанк' },
//   { id: 1, name: 'Совкомбанк' },
// ];

const ObjectBlock: FC = () => {
	const { getBlank } = useBlankStore();
	const blank = getBlank();

	const { updateInsuranceObjectField } = useInsuranceObjectStore();

	const { data: BANKS } = useBanks();
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
						{blank.insuranceTypeId !== 4 && (
							<>
								<Grid item xs={4}>
									Название
								</Grid>
								<Grid item xs={8}>
									<CustomTextField
										onBlurHandler={(value: string) => {
											updateInsuranceObjectField('name', value);
										}}
									/>
								</Grid>
							</>
						)}
						<Grid item xs={4}>
							<Typography>Страховая сумма</Typography>
						</Grid>
						<Grid item xs={8}>
							<CustomTextField
								type='number'
								onBlurHandler={(value: string) => {
									updateInsuranceObjectField('sum', Number(value));
								}}
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
									<CustomTextField
										type='number'
										onBlurHandler={(value: string) => {
											updateInsuranceObjectField('horsePowers', Number(value));
										}}
									/>
								</Grid>
							</>
						)}
						{/* TODO: подумать насчет кредитованных объектов, каким образом это указывать, сейчас я вижу 2 пути: 
              1)Вместо решения брокера добавить чекбокс, при нажатии которого будет появляться поле банк
              2) заузать решение брокера, но тогда надо подумать над реализацие, либо добавить пустой элемент в массив банков(что звучит как жижа) или как-то добавить дефолтное значение в селект  */}
						{BANKS && (
							<>
								<Grid item xs={4}>
									<Typography>Банк</Typography>
								</Grid>
								<Grid item xs={8}>
									<CustomSelect
										items={BANKS}
										onChangeHandler={(value) => {
											updateInsuranceObjectField('bank', value);
										}}
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
