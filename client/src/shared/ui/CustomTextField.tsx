import { BaseTextFieldProps, TextField } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { BlankData, useBlankStore } from '../stores/useBlankStore';

export interface CustomTextFieldProps extends BaseTextFieldProps {
  value?: string;
  globalStoreKey?: keyof BlankData;
}

const CustomTextField: FC<CustomTextFieldProps> = ({
  globalStoreKey,
  value = '',
  size = 'small',
  fullWidth = true,
  ...props
}) => {
  const { updateBlankField } = useBlankStore();
  const [inputValue, setInputValue] = useState(value);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onBlurHandler = () => {
    if (globalStoreKey) updateBlankField(globalStoreKey, inputValue);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <TextField
      size={size}
      fullWidth={fullWidth}
      value={inputValue}
      onChange={onChangeHandler}
      onBlur={onBlurHandler}
      {...props}
    />
  );
};

export default CustomTextField;
