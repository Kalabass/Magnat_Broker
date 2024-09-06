import { BlankData, useBlankStore } from '@/shared/stores/useBlankStore';
import {
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';

interface Item {
  id: number;
  name: string;
}

interface SelectWithTitleProps {
  title?: string;
  blankKey: keyof BlankData;
  items: Item[];
}

const SelectWithTitle: FC<SelectWithTitleProps> = ({
  items,
  blankKey,
  title,
}) => {
  const { updateBlankField } = useBlankStore();
  const [item, setItem] = useState(items[0]);

  const handleChange = (e: SelectChangeEvent) => {
    const selectedId = parseInt(e.target.value, 10);
    const selectedItem = items.find((item) => item.id === selectedId);
    if (selectedItem) {
      setItem(selectedItem);
      updateBlankField(blankKey, selectedItem);
    }
  };

  return (
    <Grid item container>
      {title && (
        <Grid
          item
          xs={4}
          alignItems='center'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
          }}
        >
          <Typography>{title}</Typography>
        </Grid>
      )}
      <Grid item xs={title ? 8 : 12}>
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
      </Grid>
    </Grid>
  );
};

export default SelectWithTitle;
