import { ItemData } from '@/shared/api/services/bankService'
import { Grid, Typography } from '@mui/material'
import { FC } from 'react'
import CustomSelect from '../../../pages/contractNew/ui/GeneralInfoBlock/CustomSelect'

interface UniversalWrapperProps {
	title: string
	items: ItemData[] | undefined
	onChangeHandler: (value: number) => void
}

export const CustomSelectWithTitle: FC<UniversalWrapperProps> = ({
	title,
	items,
	onChangeHandler,
}) => {
	return (
		<>
			<Grid item xs={4} justifyContent='center' alignItems='center'>
				<Typography>{title}</Typography>
			</Grid>
			<Grid item xs={8} justifyContent='center' alignItems='center'>
				{items && (
					<CustomSelect items={items} onChangeHandler={onChangeHandler} />
				)}
			</Grid>
		</>
	)
}
