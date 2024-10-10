import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { CompaniesSelect } from '@/widgets/CompaniesSelect';
import { EmployeeSelect } from '@/widgets/EmployeeSelect';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TimeBlock from './TimeBLock';

const LeftBlock: FC = () => {
	const { control } = useFormContext();

	return (
		<>
			<TimeBlock />

			<Controller
				disabled={true}
				name={FormFieldNamesMap.blankInsuranceCompanyId}
				control={control}
				rules={{ required: 'Выберите страховую' }}
				render={({ field, fieldState: { error } }) => (
					<CompaniesSelect
						{...field}
						error={!!error}
						formHelperText={error?.message}
						value={field.value}
					/>
				)}
			/>

			<Controller
				name={FormFieldNamesMap.blankEmployeeId}
				control={control}
				rules={{ required: 'Выберите агента' }}
				render={({ field, fieldState: { error } }) => (
					<EmployeeSelect
						{...field}
						error={error ? true : false}
						formHelperText={error?.message}
					/>
				)}
			/>
		</>
	);
};

export default LeftBlock;
