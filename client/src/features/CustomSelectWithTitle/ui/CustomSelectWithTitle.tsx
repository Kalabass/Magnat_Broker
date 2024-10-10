import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import CustomSelect, {
	SelectWithTitleProps,
} from '../../../pages/contractNew/ui/GeneralInfoBlock/CustomSelect';

export interface CustomSelectWithTitleProps extends SelectWithTitleProps {
	title?: string;
}

export const CustomSelectWithTitle: FC<CustomSelectWithTitleProps> = ({
	title,
	items,
	label,
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
				{items && (
					<>
						<CustomSelect label={label || title} items={items} {...props} />
					</>
				)}
			</Grid>
		</Grid>
	);
};
