import { FC } from 'react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import CustomTextFieldRef from '../CustomTextFieldRef';

interface DateInputController {
	name?: string;
}

const DateInputController: FC<Omit<ControllerProps, 'render'>> = (props) => {
	const { control } = useFormContext();
	return (
		<Controller
			{...props}
			control={control ?? undefined}
			render={({ field, fieldState: { error } }) => (
				<CustomTextFieldRef
					type='date'
					error={!!error}
					helperText={error?.message}
					{...field}
					onChange={(e) => {
						const dateValue = e.target.value;
						if (dateValue) {
							const parsedDate = new Date(dateValue);
							if (!isNaN(parsedDate.getTime())) {
								field.onChange(parsedDate);
							} else {
								field.onChange(null);
							}
						} else {
							field.onChange(null);
						}
					}}
					value={field.value ? field.value.toISOString().split('T')[0] : ''}
				/>
			)}
		/>
	);
};

export default DateInputController;
