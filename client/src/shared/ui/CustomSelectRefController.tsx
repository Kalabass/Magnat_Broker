import { FC } from 'react';
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form';
import CustomSelect, { SelectWithTitleProps } from './CustomSelectRef';

interface CustomSelectRefController extends SelectWithTitleProps {
	fieldName?: string;
	rules?: RegisterOptions;
}

const CustomSelectRefController: FC<CustomSelectRefController> = ({
	fieldName,
	rules,
	...props
}) => {
	const { control } = useFormContext();
	return (
		<Controller
			defaultValue={undefined}
			control={control}
			name={fieldName ?? ''}
			rules={rules}
			render={({ field, fieldState: { error } }) => (
				<CustomSelect
					{...props}
					{...field}
					error={!!error}
					formHelperText={error?.message}
					value={field.value ?? ''}
				/>
			)}
		/>
	);
};

export default CustomSelectRefController;
