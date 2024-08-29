import { itemData } from '@/pages/contractNew/ui/GeneralInfoBlock/GeneralInfoBlock';
import { BaseSelectProps, Select } from '@mui/material';
import { FC } from 'react';

interface CustomSelectProps extends BaseSelectProps {
  items: itemData;
}

const CustomSelect: FC<CustomSelectProps> = ({ items }) => {
  return <Select></Select>;
};

export default CustomSelect;
