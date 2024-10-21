import { useProcessedBlanks } from '@/entities/blank';
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { FC } from 'react';
import { paginationModel } from '../../const/paginationModel';
import { TABLE_COLUMNS_NAMES } from '../../const/tableColumnNames';
const DataGridBlock: FC = () => {
	const { data, isFetching } = useProcessedBlanks();
	const processedBlanks = data?.map((blank, index) => ({
		...blank,
		blankNumber: index + 1,
	}));

	const columns = TABLE_COLUMNS_NAMES;
	const rows = processedBlanks;
	return (
		<Paper
			component={'section'}
			sx={{
				borderRadius: '10px',
				padding: 5,
				width: '100%',
				height: 'auto',
				display: 'block',
			}}
		>
			<DataGrid
				autoHeight
				columns={columns}
				rows={rows}
				checkboxSelection
				initialState={{ pagination: { paginationModel } }}
				loading={isFetching}
			/>
		</Paper>
	);
};

export default DataGridBlock;
