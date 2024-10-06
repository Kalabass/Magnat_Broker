import { AppRoutes } from '@/shared/const/AppRoutes'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import AvatarWithMenu from './Avatar'

const NavBar: FC = () => {
	return (
		<AppBar>
			<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Link to={AppRoutes.CONTRACTS}>
					<Typography fontWeight={1000} fontSize={36}>
						Magnat.Broker
					</Typography>
				</Link>

				<AvatarWithMenu />
			</Toolbar>
		</AppBar>
	)
}

export default NavBar
