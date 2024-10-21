import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { FC } from 'react';
interface PasswordInputAdornmentProps {
	onCLick: () => void;
	inputType: 'password' | 'text';
}

const PasswordInputAdornment: FC<PasswordInputAdornmentProps> = ({
	onCLick,
	inputType,
}) => {
	return (
		<InputAdornment position='end'>
			<IconButton onClick={onCLick}>
				{inputType === 'password' ? <VisibilityOff /> : <Visibility />}
			</IconButton>
		</InputAdornment>
	);
};

export default PasswordInputAdornment;
