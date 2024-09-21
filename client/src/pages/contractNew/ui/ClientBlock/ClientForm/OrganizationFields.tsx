import { useClientStore } from '@/shared/stores/useClientStore'
import CustomTextField from '@/shared/ui/CustomTextField'
import { Grid, Typography } from '@mui/material'
import { FC } from 'react'

const OrganizationFields: FC = () => {
	const { updateClientField } = useClientStore()
	return (
		<>
			<Grid item xs={2}>
				<Typography>Название</Typography>
			</Grid>
			<Grid item xs={10}>
				<CustomTextField
					required
					onBlurHandler={(value: string) => {
						updateClientField('name', value)
					}}
				/>
			</Grid>
		</>
	)
}

export default OrganizationFields
