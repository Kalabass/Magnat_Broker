import { removeTokenFromLocalStorage } from '@/shared/lib/localStorage/tokenStorage'
import LogoutIcon from '@mui/icons-material/Logout'
import { Avatar, Menu, MenuItem } from '@mui/material'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AvatarWithMenu: FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const navigate = useNavigate()

	return (
		<>
			<Avatar sx={{ bgcolor: 'deepskyblue' }} onClick={handleClick}>
				U
			</Avatar>
			<Menu
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				onClick={handleClose}
				slotProps={{
					paper: {
						elevation: 0,
						sx: {
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							mt: 1.5,
							'& .MuiAvatar-root': {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							'&::before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: 'background.paper',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0,
							},
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem
					onClick={() => {
						navigate('/profile')
					}}
				>
					<Avatar /> профиль
				</MenuItem>
				<MenuItem
					onClick={() => {
						removeTokenFromLocalStorage()
						navigate('/auth')
					}}
				>
					<LogoutIcon color='disabled' />
					выйти
				</MenuItem>
			</Menu>
		</>
	)
}

export default AvatarWithMenu
