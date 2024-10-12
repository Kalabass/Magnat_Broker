import CustomSelectRefController from '@/shared/ui/CustomSelectRefController';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';

export interface CustomSelectWithTitleProps extends CustomSelectRefController {
	title?: string;
}

export const CustomSelectWithTitle: FC<CustomSelectWithTitleProps> = ({
	title,
	items,
	...props
}) => {
	return (
		<Grid
			item
			container
			xs={12}
			justifyContent='center'
			alignItems='center'
			spacing={1}
		>
			<Grid item xs={4}>
				<Typography>{title}</Typography>
			</Grid>
			<Grid item xs={8}>
				{items && <CustomSelectRefController {...props} items={items} />}
			</Grid>
		</Grid>
	);
};
