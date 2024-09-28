import { useProcessedBlanksToExcelMutation } from '@/entities/blank/lib/useProcessedBlanksToExcel.mutation'
import { useFiltersStore } from '@/shared/stores/useFiltersStore'
import { Button, Paper } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const UtilsBlock: FC = () => {
	const mutation = useProcessedBlanksToExcelMutation()
	const { getFilters } = useFiltersStore()
	const filters = getFilters()
	return (
		<Paper component={'section'} sx={{ borderRadius: '10px', padding: 5 }}>
			<Button>
				<Link to={'/contracts/new'}>создать новый</Link>
			</Button>
			<Button
				onClick={() => {
					mutation.mutate(filters)
				}}
			>
				экспорт
			</Button>
		</Paper>
	)
}

export default UtilsBlock
