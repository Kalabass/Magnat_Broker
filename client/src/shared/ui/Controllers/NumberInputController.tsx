import { FC, HTMLInputTypeAttribute } from 'react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import CustomTextFieldRef from '../CustomTextFieldRef';

interface NumberInputControllerProps extends Omit<ControllerProps, 'render'> {
	type?: HTMLInputTypeAttribute;
}

const InputController: FC<NumberInputControllerProps> = ({
	type,
	...props
}) => {
	const { control } = useFormContext();
	return (
		<Controller
			{...props}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<CustomTextFieldRef
					{...field}
					value={field.value ?? ''}
					error={!!error}
					helperText={error?.message}
					type={type}
				/>
			)}
		/>
	);
};

export default InputController;
