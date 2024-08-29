import { useBlankStore } from '@/shared/stores/useBlankStore';
import {
  Box,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { itemData } from './GeneralInfoBlock';

interface BlankNumberBlock {
  items: itemData[];
}
//TODO: менять этот блок в зависимости от типа страхования
const BlankNumberBlock: FC<BlankNumberBlock> = ({ items }) => {
  const [series, setSeries] = useState(items[0]);
  const { getBlank } = useBlankStore();
  const blank = getBlank();
  return (
    <>
      <Grid item xs={4}>
        <Typography>Полис</Typography>
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          {blank.insuranceType?.name.toUpperCase() !== 'ИПОТЕКА' && (
            <Select
              size='small'
              value={series.id.toString()}
              onChange={(e: SelectChangeEvent) => {
                setSeries(items[+e.target.value]);
              }}
            >
              {items.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          )}
          <TextField fullWidth size='small' />
        </Box>
      </Grid>
    </>
  );
};

export default BlankNumberBlock;
