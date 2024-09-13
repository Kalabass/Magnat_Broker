import { CustomToggle } from '@/features/ClientTypeToggle';
import CustomTextField from '@/shared/ui/CustomTextField';
import { Button, FormGroup, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FC, useState } from 'react';
import { itemData } from '../GeneralInfoBlock/GeneralInfoBlock';

const CLIENT_TYPES: itemData[] = [
  {
    id: 0,
    name: 'ФЛ',
  },
  {
    id: 1,
    name: 'ЮЛ',
  },
];

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
interface SearchCLientModal {
  open: boolean;
  handleClose: () => void;
}
export const SearchCLientModal: FC<SearchCLientModal> = ({
  handleClose,
  open,
}) => {
  //TODO: исправить или удалить компонент полностью
  const [clientType, _setClientType] = useState<itemData>(CLIENT_TYPES[0]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <CustomToggle items={CLIENT_TYPES} />
        {clientType.name === 'ФЛ' ? (
          <FormGroup>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <Typography>ФИО</Typography>
              </Grid>
              <Grid item xs={7}>
                <CustomTextField></CustomTextField>
              </Grid>
              <Grid item xs={3}>
                <CustomTextField type='date'></CustomTextField>
              </Grid>
              <Grid item xs={2}>
                <Typography>ИНН</Typography>
              </Grid>
              <Grid item xs={10}>
                <CustomTextField></CustomTextField>
              </Grid>
              <Grid item xs={2}>
                <Typography>Паспорт</Typography>
              </Grid>
              <Grid item xs={4}>
                <CustomTextField></CustomTextField>
              </Grid>

              <Grid item xs={6}>
                <CustomTextField></CustomTextField>
              </Grid>
            </Grid>
          </FormGroup>
        ) : (
          <></>
        )}

        <Button onClick={handleClose} type='submit' variant='contained'>
          ПОИСК
        </Button>
      </Box>
    </Modal>
  );
};
