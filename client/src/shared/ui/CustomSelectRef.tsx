import {
	BaseSelectProps,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { forwardRef } from 'react';
import { itemData } from '../../pages/contractNew/ui/GeneralInfoBlock/GeneralInfoBlock';

export interface SelectWithTitleProps extends BaseSelectProps {
	items?: itemData[] | undefined;
	label?: string;
	formHelperText?: string;
	error?: boolean;
}

const CustomSelect = forwardRef<HTMLSelectElement, SelectWithTitleProps>(
	({ items, label, error, formHelperText, value, ...props }, ref) => {
		return (
			<FormControl fullWidth error={error}>
				<InputLabel size='small'>{label}</InputLabel>
				<Select
					fullWidth
					size='small'
					label={label}
					inputRef={ref}
					value={value || ''}
					{...props}
				>
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
	}
);

export default CustomSelect;
