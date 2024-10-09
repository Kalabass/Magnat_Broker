import { CLIENT_TYPE_NAME_ORGANIZATION } from '@/pages/contractNew/constants/clinetTypes.const';
import { FormFieldNamesMap } from '@/pages/contractNew/constants/FormFieldNames';
import { itemData } from '@/pages/contractNew/ui/GeneralInfoBlock/GeneralInfoBlock';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export interface CustomToggleProps {
	items: itemData[];
}

export const CustomToggle: FC<CustomToggleProps> = ({ items }) => {
	const { control } = useFormContext();

	return (
		<Controller
			name={FormFieldNamesMap.clientIsLegal}
			control={control}
			defaultValue={0}
			render={({ field: { onChange, value } }) => (
				<ToggleButtonGroup
					size='small'
					exclusive
					value={value ? 1 : 0}
					onChange={(_event, newValue) => {
						if (newValue !== null) {
							const selectedItem = items.find((item) => item.id === newValue);
							if (selectedItem) {
								const isLegal =
									selectedItem.name === CLIENT_TYPE_NAME_ORGANIZATION;
								onChange(isLegal);
							}
						}
					}}
				>
					{items.map((type) => (
						<ToggleButton key={type.id} value={type.id}>
							{type.name}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			)}
		/>
	);
};
