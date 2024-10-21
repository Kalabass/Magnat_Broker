import { Grid } from '@mui/material';
import { FC } from 'react';

import CustomStyledPaper from '../common/StyledPaper';
import LeftBlock from './SubBLocks/LeftBlock';
import RightBlock from './SubBLocks/RightBlock';

const GeneralInfoBlock: FC = () => {
	return (
		<CustomStyledPaper>
			<Grid container spacing={5}>
				<Grid
					container
					item
					xs={6}
					spacing={1}
					justifyContent='center'
					alignItems='center'
				>
					<LeftBlock />
				</Grid>
				<Grid item xs={6}>
					<Grid
						container
						spacing={1}
						justifyContent='center'
						alignItems='center'
					>
						<RightBlock />
					</Grid>
				</Grid>
			</Grid>
		</CustomStyledPaper>
	);
};

export default GeneralInfoBlock;
