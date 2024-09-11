import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { FC, useState } from 'react';
import { itemData } from './GeneralInfoBlock';

interface SelectWithTitleProps {
  onChangeHandler?: (value: number) => void;
  items: itemData[];
}

const CustomSelect: FC<SelectWithTitleProps> = ({ items, onChangeHandler }) => {
  const [item, setItem] = useState(items[0]);

  const handleChange = (e: SelectChangeEvent) => {
    const selectedId = parseInt(e.target.value, 10);
    const selectedItem = items.find((item) => item.id === selectedId);
    if (selectedItem) {
      setItem(selectedItem);
      if (onChangeHandler) onChangeHandler(selectedId);
    }
  };

  return (
    <Select
      fullWidth
      size='small'
      value={item.id.toString()}
      onChange={handleChange}
    >
      {items.map((item) => (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
