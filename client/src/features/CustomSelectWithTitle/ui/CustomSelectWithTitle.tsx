import { ItemData } from '@/shared/api/services/bankService'
import { Grid, Typography } from '@mui/material'
import { FC } from 'react'
import CustomSelect from '../../../pages/contractNew/ui/GeneralInfoBlock/CustomSelect'

interface UniversalWrapperProps {
	title: string
	items: ItemData[] | undefined
	onChangeHandler: (value: number | undefined) => void
}

export const CustomSelectWithTitle: FC<UniversalWrapperProps> = ({
	title,
	items,
	onChangeHandler,
}) => {
	return (
		<Grid
			item
			container
			xs={12}
			justifyContent='center'
			alignItems='center'
			spacing={1}
		>
			<Grid item xs={4}>
				<Typography>{title}</Typography>
			</Grid>
			<Grid item xs={8}>
				{items && (
					<CustomSelect items={items} onChangeHandler={onChangeHandler} />
				)}
			</Grid>
		</Grid>
	)
}
