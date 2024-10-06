import { CLIENT_TYPE_NAME_INDIVIDUAL } from '@/pages/contractNew/constants/clinetTypes.const';
import { itemData } from '@/pages/contractNew/ui/GeneralInfoBlock/GeneralInfoBlock';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FC, MouseEvent, useState } from 'react';

export interface CustomToggleProps {
  items: itemData[];
  onClick?: (value: boolean) => void;
}

export const CustomToggle: FC<CustomToggleProps> = ({ items, onClick }) => {
  const [selectedItem, setSelectedItem] = useState<itemData>(items[0]);

  const handleChange = (_e: MouseEvent<HTMLElement>, newClientType: number) => {
    const selectedType = items.find((type) => type.id === newClientType);

    if (!selectedType) return;

    setSelectedItem(selectedType);

    if (onClick)
      onClick(selectedType.name.toUpperCase() === CLIENT_TYPE_NAME_INDIVIDUAL);
  };

  return (
    <ToggleButtonGroup
      size='small'
      exclusive
      value={selectedItem.id}
      onChange={handleChange}
    >
      {items.map((type) => (
        <ToggleButton key={type.id} value={type.id}>
          {type.name}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
