import { useFiltersStore } from '@/shared/stores/useFiltersStore'
import { CompaniesSelect } from '@/widgets/CompaniesSelect'
import { Grid } from '@mui/material'
import { FC } from 'react'

const SettingsBlockRight: FC = () => {
	const { updateFiltersField } = useFiltersStore()
	return (
		<Grid item container spacing={1} xs={4}>
			<CompaniesSelect
				onChangeHandler={value => {
					updateFiltersField('insuranceCompanyId', value)
				}}
			/>
			<Grid item container xs={12} sx={{ height: '100%' }} />
			<Grid item container xs={12} sx={{ height: '100%' }} />
		</Grid>
	)
}

export default SettingsBlockRight
