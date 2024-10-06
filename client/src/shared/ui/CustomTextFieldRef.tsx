import {
	FormControl,
	FormHelperText,
	InputLabel,
	OutlinedInput,
	OutlinedInputProps,
} from '@mui/material';
import { forwardRef } from 'react';

interface CustomOutlinedInputProps extends OutlinedInputProps {
	helperText?: string;
	inputLabel?: string;
}

const CustomTextFieldRef = forwardRef<
	HTMLInputElement,
	CustomOutlinedInputProps
>(
	(
		{
			size = 'small',
			fullWidth = true,
			helperText,
			inputLabel,
			error,
			...props
		},
		ref
	) => {
		return (
			<FormControl size='small' error={error} fullWidth>
				<InputLabel>{inputLabel}</InputLabel>
				<OutlinedInput inputRef={ref} fullWidth={fullWidth} {...props} />
				<FormHelperText>{helperText}</FormHelperText>
			</FormControl>
		);
	}
);

export default CustomTextFieldRef;
