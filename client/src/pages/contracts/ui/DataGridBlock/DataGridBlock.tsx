import { useProcessedBlanks } from '@/entities/blank'
import { useFiltersStore } from '@/shared/stores/useFiltersStore'
import { Paper } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { FC } from 'react'
import { paginationModel } from '../../const/paginationModel'
import { TABLE_COLUMNS_NAMES } from '../../const/tableColumnNames'
const DataGridBlock: FC = () => {
	const { getFilters } = useFiltersStore()
	const filters = getFilters()
	const { data } = useProcessedBlanks(filters)

	const processedBlanks = data?.map((blank, index) => ({
		...blank,
		blankNumber: index + 1,
	}))

	const columns = TABLE_COLUMNS_NAMES
	const rows = processedBlanks
	return (
		<Paper
			component={'section'}
			sx={{
				borderRadius: '10px',
				padding: 5,
				width: '100%',
				height: 'auto',
			}}
		>
			<DataGrid
				autoHeight
				columns={columns}
				rows={rows}
				sx={{
					background: 'white',
					alignItems: 'center',
					border: 0,
					fontSize: '16px',
				}}
				checkboxSelection
				initialState={{ pagination: { paginationModel } }}
			/>
		</Paper>
	)
}

export default DataGridBlock