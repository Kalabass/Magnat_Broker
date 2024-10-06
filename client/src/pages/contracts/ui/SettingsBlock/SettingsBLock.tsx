import { Box, Grid, Paper } from '@mui/material'
import { FC } from 'react'
import SettingsBlockLeft from './SettingsBlockLeft'
import SettingsBlockMiddle from './SettingsBlockMiddle'
import SettingsBlockRight from './SettingsBlockRight'

const SettingsBlock: FC = () => {
	return (
		<Paper component={'section'} sx={{ borderRadius: '10px', padding: 5 }}>
			<Box
				component={'form'}
				sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
			>
				<Grid container spacing={5}>
					<SettingsBlockLeft />
					<SettingsBlockMiddle />
					<SettingsBlockRight />
				</Grid>
			</Box>
		</Paper>
	)
}

export default SettingsBlock
