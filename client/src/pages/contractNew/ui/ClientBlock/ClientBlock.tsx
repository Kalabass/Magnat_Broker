import { Paper, useTheme } from '@mui/material'
import { FC } from 'react'
import ClientForm from './ClientForm/ClientForm'

const ClientBlock: FC = () => {
	const theme = useTheme()
	return (
		<Paper
			component={'section'}
			sx={{ borderRadius: theme.spacing(1), padding: theme.spacing(5) }}
		>
			<ClientForm />
		</Paper>
	)
}

export default ClientBlock
