import { useFiltersStore } from '@/shared/stores/useFiltersStore'
import CustomTextField from '@/shared/ui/CustomTextField'
import { EmployeeSelect } from '@/widgets/EmployeeSelect'
import { SellingPointSelect } from '@/widgets/SellingPointSelect'
import { Grid, Typography } from '@mui/material'
import { FC } from 'react'

const SettingsBlockMiddle: FC = () => {
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
				<Typography>№ Полиса</Typography>
			</Grid>
			<Grid item xs={8}>
				<CustomTextField
					onBlurHandler={value => {
						updateFiltersField('policeNumber', value)
					}}
				/>
			</Grid>
			<EmployeeSelect
				onChangeHandler={value => {
					updateFiltersField('employeeId', value)
				}}
			/>
			<SellingPointSelect
				onChangeHandler={value => {
					updateFiltersField('sellingPointId', value)
				}}
			/>
		</Grid>
	)
}

export default SettingsBlockMiddle
