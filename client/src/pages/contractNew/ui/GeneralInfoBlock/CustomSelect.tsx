import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC, useState } from 'react';
import { itemData } from './GeneralInfoBlock';

interface SelectWithTitleProps {
	onChangeHandler?: (value: number | undefined) => void; // Изменяем тип на number | null
	items: itemData[];
	label?: string;
}

const CustomSelect: FC<SelectWithTitleProps> = ({
	items,
	onChangeHandler,
	label,
}) => {
	const [item, setItem] = useState<itemData | undefined>(undefined);

	const handleChange = (e: SelectChangeEvent) => {
		const selectedId =
			e.target.value === '' ? undefined : parseInt(e.target.value, 10); // Обработка пустого значения
		const selectedItem =
			selectedId !== undefined
				? items.find((item) => item.id === selectedId)
				: undefined;
		setItem(selectedItem);
		if (onChangeHandler) onChangeHandler(selectedId);
	};

	return (
		<Select
			fullWidth
			size='small'
			value={item ? item.id.toString() : ''}
			onChange={handleChange}
			label={label}
		>
			<MenuItem value='' sx={{ minHeight: '36px', height: '36px' }}>
				<em></em>
			</MenuItem>
			{items.map((item) => (
				<MenuItem key={item.id} value={item.id}>
					{item.name}
				</MenuItem>
			))}
		</Select>
	);
};

export default CustomSelect;
