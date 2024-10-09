import { ItemData } from '@/shared/model/interface';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import CustomSelect from '../../../pages/contractNew/ui/GeneralInfoBlock/CustomSelect';

export interface CustomSelectWithTitleProps {
	title: string;
	items?: ItemData[] | undefined;
	onChangeHandler?: (value: number | undefined) => void;
	formHelperText?: string;
	error?: boolean;
}

export const CustomSelectWithTitle: FC<CustomSelectWithTitleProps> = ({
	title,
	items,
	onChangeHandler,
	error,
	formHelperText,
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
						<CustomSelect
							label={title}
							items={items}
							error={error}
							formHelperText={formHelperText}
							onChangeHandler={onChangeHandler}
						/>
					</>
				)}
			</Grid>
		</Grid>
	);
};
