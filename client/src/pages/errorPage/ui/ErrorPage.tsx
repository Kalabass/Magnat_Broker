import { Box, Button, Typography } from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage: FC = () => {
	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate(-1) // Возвращает на предыдущую страницу
	}

	return (
		<Box
			sx={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
				color: '#fff',
				padding: 2,
			}}
		>
			<Typography variant='h1' component='h1' fontSize='64px' fontWeight={700}>
				Ошибка 404
			</Typography>
			<Typography variant='h5' component='h2' marginBottom={3}>
				Упс! Страница не найдена.
			</Typography>
			<Typography variant='body1' marginBottom={4}>
				Похоже, что вы перешли по неверной ссылке или страница была удалена.
			</Typography>
			<Button variant='contained' color='primary' onClick={handleGoBack}>
				Вернуться назад
			</Button>
		</Box>
	)
}
