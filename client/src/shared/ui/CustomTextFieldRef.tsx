import { BaseTextFieldProps, TextField } from '@mui/material';
import { forwardRef } from 'react';

const CustomTextFieldRef = forwardRef<HTMLInputElement, BaseTextFieldProps>(
	({ size = 'small', fullWidth = true, ...props }, ref) => {
		return (
			<TextField inputRef={ref} size={size} fullWidth={fullWidth} {...props} />
		);
	}
);

export default CustomTextFieldRef;
