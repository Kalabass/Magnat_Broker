import {
  FormGroup,
  Grid,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { FC, MouseEvent, useState } from 'react';
import { itemData } from '../GeneralInfoBlock/GeneralInfoBlock';
import TextFieldWithTitle from './TextFieldWithTitle';

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

const ClientBlock: FC = () => {
  const [clientType, setClientType] = useState(CLIENT_TYPES[0]);

  const handleChange = (e: MouseEvent<HTMLElement>, newClientType: string) => {
    const selectedId = parseInt(newClientType, 10);
    const selectedType = CLIENT_TYPES.find((type) => type.id === selectedId);
    if (selectedType) {
      setClientType(selectedType);
    }
  };
  return (
    <Paper sx={{ borderRadius: '10px', padding: '40px' }}>
      <FormGroup>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ToggleButtonGroup
              size='small'
              exclusive
              value={clientType.id}
              onChange={handleChange}
            >
              {CLIENT_TYPES.map((type) => (
                <ToggleButton key={type.id} value={type.id}>
                  {type.name}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Grid>
          <Grid item container spacing={1}>
            <TextFieldWithTitle
              xs={2}
              title={clientType.id == 0 ? 'ФИО' : 'Название'}
            />
            <TextFieldWithTitle xs={2} title='Номер телефона' />
            {clientType.id == 0 && (
              <>
                <TextFieldWithTitle xs={2} title='Дата рождения' type='date' />
                <TextFieldWithTitle
                  xs={2}
                  title='Паспорт'
                  inputNum={2}
                  type='number'
                />
              </>
            )}
            <TextFieldWithTitle xs={2} title='ИНН' type='number' />
            <TextFieldWithTitle xs={2} title='Адрес' />
          </Grid>
        </Grid>
      </FormGroup>
    </Paper>
  );
};

export default ClientBlock;
