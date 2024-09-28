import { Container, Stack } from '@mui/material'
import { FC } from 'react'
import DataGridBlock from './DataGridBlock/DataGridBlock'
import SettingsBlock from './SettingsBlock/SettingsBLock'
import UtilsBlock from './UtilsBlock/UtilsBlock'

export const ContractsPage: FC = () => {
	return (
		<Container
			maxWidth={false}
			sx={{
				background: ' rgb(203, 234, 244)',
				padding: '40px 0 40px 0 ',
				marginTop: '64px',
				width: '100%',
			}}
		>
			<Stack gap={2}>
				<UtilsBlock />
				<SettingsBlock />
				<DataGridBlock />
			</Stack>
		</Container>
	)
}
