import { useClientStore } from '@/shared/stores/useClientStore'
import CustomTextField from '@/shared/ui/CustomTextField'
import { Grid, Typography } from '@mui/material'
import { FC } from 'react'

const IndividualFields: FC = () => {
	const { updateClientField } = useClientStore()
	return (
		<>
			<Grid item xs={2}>
				<Typography>ФИО</Typography>
			</Grid>
			<Grid item xs={8}>
				<CustomTextField
					required
					onBlurHandler={(value: string) => {
						updateClientField('name', value)
					}}
				/>
			</Grid>
			<Grid item xs={2}>
				<CustomTextField
					type='date'
					onBlurHandler={(value: string) => {
						updateClientField('birthDate', new Date(value))
					}}
				/>
			</Grid>

			<Grid item xs={2}>
				<Typography>Паспорт</Typography>
			</Grid>
			<Grid item xs={1}>
				<CustomTextField
					type='number'
					onBlurHandler={(value: string) => {
						updateClientField('passportSeries', +value)
					}}
				/>
			</Grid>
			<Grid item xs={3}>
				<CustomTextField
					type='number'
					onBlurHandler={(value: string) => {
						updateClientField('passportNumber', +value)
					}}
				/>
			</Grid>
			<Grid item xs={6} />
		</>
	)
}

export default IndividualFields
