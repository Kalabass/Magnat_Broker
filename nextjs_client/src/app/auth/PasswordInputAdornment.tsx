'use client';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';

export default function PasswordInputAdornment({
  onClick,
}: {
  onClick: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <InputAdornment position='end'>
      <IconButton
        onClick={() => {
          setIsVisible(!isVisible);
          onClick();
        }}
      >
        {isVisible ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
}
