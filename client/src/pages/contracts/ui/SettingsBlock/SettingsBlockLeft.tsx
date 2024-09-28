import { useFiltersStore } from '@/shared/stores/useFiltersStore'
import CustomTextField from '@/shared/ui/CustomTextField'
import { InsuranceTypeSelect } from '@/widgets/InsuraceTypeSelect'
import { Box, Grid, Typography } from '@mui/material'
import { FC } from 'react'

const SettingsBlockLeft: FC = () => {
	const { updateFiltersField } = useFiltersStore()

	return (
		<Grid
			item
			container
			spacing={1}
			xs={4}
			justifyContent='center'
			alignItems='center'
		>
			<Grid item xs={4}>
				<Typography>Дата заключения</Typography>
			</Grid>
			<Grid item xs={8}>
				<Box
					width={'100%'}
					sx={{
						display: 'flex',
						flexDirection: 'row',
						gap: 1,
						alignItems: 'center',
					}}
				>
					<CustomTextField
						type='date'
						onBlurHandler={value => {
							updateFiltersField('conclusionDateStart', new Date(value))
						}}
					/>
					-
					<CustomTextField
						type='date'
						onBlurHandler={value => {
							updateFiltersField('conclusionDateEnd', new Date(value))
						}}
					/>
				</Box>
			</Grid>

			<InsuranceTypeSelect
				onChangeHandler={(value: number | undefined) => {
					updateFiltersField('typeId', value)
				}}
			/>
			<Grid item xs={4}>
				<Typography>Страхователь</Typography>
			</Grid>
			<Grid item xs={8}>
				<CustomTextField
					onBlurHandler={value => {
						updateFiltersField('client', value)
					}}
				/>
			</Grid>
		</Grid>
	)
}

export default SettingsBlockLeft
