import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { useBlankStore } from '@/shared/stores/useBlankStore';
import CustomTextFieldRef from '@/shared/ui/CustomTextFieldRef';
import { Grid, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import CustomSelect from '../CustomSelect';
import { itemData } from '../GeneralInfoBlock';

interface BlankNumberBlock {
	items: itemData[];
}

const BlankNumberBlock: FC<BlankNumberBlock> = ({ items }) => {
	const { getBlank } = useBlankStore();
	const blank = getBlank();

	const { control } = useFormContext();

	return (
		<>
			<Grid item xs={4}>
				<Typography>Полис</Typography>
			</Grid>
			<Grid item container xs={8} spacing={1}>
				{blank.insuranceTypeId !== 4 && (
					<Grid item xs={4}>
						<Controller
							name={FormFieldNamesMap.blankSeriesId}
							control={control}
							rules={{ required: true }}
							render={({ field, fieldState: { error } }) => (
								<CustomSelect
									{...field}
									label='серия'
									items={items}
									error={!!error}
									formHelperText={error?.message}
								/>
							)}
						/>
					</Grid>
				)}
				<Grid item xs={blank.insuranceTypeId === 4 ? 12 : 8}>
					<Controller
						name={FormFieldNamesMap.blankNumber}
						control={control}
						rules={{ required: 'Введите номер бланка' }}
						defaultValue={undefined}
						render={({ field, fieldState: { error } }) => (
							<CustomTextFieldRef
								inputLabel='номер'
								label='номер'
								error={!!error}
								helperText={error?.message}
								{...field}
								value={field.value ?? ''}
							/>
						)}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default BlankNumberBlock;
