import { Button, Paper } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const UtilsBlock: FC = () => {
	//TODO: доделать
	// const excelMutation = useProcessedBlanksToExcelMutation();

	return (
		<Paper component={'section'} sx={{ borderRadius: '10px', padding: 5 }}>
			<Button>
				<Link to={'/contracts/new'}>создать новый</Link>
			</Button>
			<Button
			// onClick={() => {
			// 	excelMutation.mutate(filters)
			// }}
			>
				экспорт
			</Button>
		</Paper>
	);
};

export default UtilsBlock;
