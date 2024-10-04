import { ItemData } from '@/shared/model/interface';
import {
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
	Typography,
} from '@mui/material';
import { FC } from 'react';
import CustomSelect from '../../../pages/contractNew/ui/GeneralInfoBlock/CustomSelect';

interface UniversalWrapperProps {
	title: string;
	items: ItemData[] | undefined;
	onChangeHandler: (value: number | undefined) => void;
	formHelperText?: string;
	error?: boolean;
}

export const CustomSelectWithTitle: FC<UniversalWrapperProps> = ({
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
						<FormControl fullWidth error={error}>
							<InputLabel size='small'>{title}</InputLabel>
							<CustomSelect
								label={title}
								items={items}
								onChangeHandler={onChangeHandler}
							/>
							<FormHelperText>{formHelperText}</FormHelperText>
						</FormControl>
					</>
				)}
			</Grid>
		</Grid>
	);
};
