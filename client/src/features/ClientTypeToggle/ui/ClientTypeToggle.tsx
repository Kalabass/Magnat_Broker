import { itemData } from '@/pages/contractNew/ui/GeneralInfoBlock/GeneralInfoBlock';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FC, MouseEvent } from 'react';

export interface ClientTypeToggleProps {
  items: itemData[];
  selectedItem?: itemData;
  onClick: (item: itemData) => void;
}

export const ClientTypeToggle: FC<ClientTypeToggleProps> = ({
  items,
  selectedItem = items[0],
  onClick,
}) => {
  const handleChange = (_e: MouseEvent<HTMLElement>, newClientType: string) => {
    const selectedId = parseInt(newClientType, 10);
    const selectedType = items.find((type) => type.id === selectedId);
    if (selectedType) {
      onClick(selectedType);
    }
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
