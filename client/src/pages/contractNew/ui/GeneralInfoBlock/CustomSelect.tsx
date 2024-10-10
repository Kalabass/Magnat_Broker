import {
	BaseSelectProps,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { FC } from 'react';
import { itemData } from './GeneralInfoBlock';

export interface SelectWithTitleProps extends BaseSelectProps {
	items?: itemData[] | undefined;
	label?: string;
	formHelperText?: string;
	error?: boolean;
}

const CustomSelect: FC<SelectWithTitleProps> = ({
	items,
	label,
	error,
	formHelperText,
	...props
}) => {
	return (
		<FormControl fullWidth error={error}>
			<InputLabel size='small'>{label}</InputLabel>
			<Select fullWidth size='small' label={label} {...props}>
				<MenuItem value='' sx={{ minHeight: '36px', height: '36px' }}>
					<em></em>
				</MenuItem>
				{items &&
					items.map((item) => (
						<MenuItem key={item.id} value={item.id}>
							{item.name}
						</MenuItem>
					))}
			</Select>
			<FormHelperText>{formHelperText}</FormHelperText>
		</FormControl>
	);
};

export default CustomSelect;
