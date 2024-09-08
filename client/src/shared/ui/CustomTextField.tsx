import { BaseTextFieldProps, TextField } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState } from 'react';

export interface CustomTextFieldProps extends BaseTextFieldProps {
  value?: string;
  onBlurHandler?: (value: string) => void;
}

const CustomTextField: FC<CustomTextFieldProps> = ({
  value = '',
  size = 'small',
  fullWidth = true,
  onBlurHandler,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    if (onBlurHandler) {
      onBlurHandler(inputValue);
    }
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
      onBlur={handleBlur}
      {...props}
    />
  );
};

export default CustomTextField;
