import { Grid, Paper } from '@mui/material'
import { FC } from 'react'

import LeftBlock from './SubBLocks/LeftBlock'
import RightBlock from './SubBLocks/RightBlock'

export interface itemData {
	id: number
	name: string
}

const GeneralInfoBlock: FC = () => {
	return (
		<Paper component={'section'} sx={{ borderRadius: '10px', padding: 5 }}>
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
		</Paper>
	)
}

export default GeneralInfoBlock
