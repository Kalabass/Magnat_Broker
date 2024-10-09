import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { useBlankStore } from '@/shared/stores/useBlankStore';
import { CompaniesSelect } from '@/widgets/CompaniesSelect';
import { EmployeeSelect } from '@/widgets/EmployeeSelect';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TimeBlock from './TimeBLock';

const LeftBlock: FC = () => {
	const { updateBlankField } = useBlankStore();
	const { control } = useFormContext();

	return (
		<>
			<TimeBlock />

			<Controller
				disabled={true}
				name={FormFieldNamesMap.blankInsuranceCompanyId}
				control={control}
				rules={{ required: 'Выберите страховую' }}
				render={({ field: { onChange }, fieldState: { error } }) => (
					<CompaniesSelect
						error={!!error}
						formHelperText={error?.message}
						onChangeHandler={(selectedValue) => {
							onChange(selectedValue);
							//updateBlankField('insuranceCompanyId', selectedValue);
						}}
					/>
				)}
			/>

			<Controller
				name={FormFieldNamesMap.blankEmployeeId}
				control={control}
				rules={{ required: 'Выберите агента' }}
				render={({ field: { onChange }, fieldState: { error } }) => (
					<EmployeeSelect
						error={error ? true : false}
						formHelperText={error?.message}
						onChangeHandler={(selectedValue) => {
							onChange(selectedValue);
							updateBlankField('employeeId', selectedValue);
						}}
					/>
				)}
			/>
		</>
	);
};

export default LeftBlock;
