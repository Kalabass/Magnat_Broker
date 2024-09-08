import { ClientTypeToggle } from '@/features/ClientTypeToggle';
import { useClientStore } from '@/shared/stores/useClientStore';
import CustomTextField from '@/shared/ui/CustomTextField';
import { FormGroup, Grid, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { itemData } from '../../GeneralInfoBlock/GeneralInfoBlock';
import IndividualFields from './IndividualFields';
import OrganizationFields from './OrganizationFields';

// TODO: вынести в КОНСТЭЭЭЭЭНТЫ
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

const ClientForm: FC = () => {
  const [clientType, setClientType] = useState(CLIENT_TYPES[0]);
  const { updateClientField } = useClientStore();
  return (
    <FormGroup>
      <Grid item container spacing={1}>
        <Grid item xs={12}>
          <ClientTypeToggle
            items={CLIENT_TYPES}
            selectedItem={clientType}
            onClick={(item: itemData) => {
              setClientType(item);
            }}
          />
        </Grid>

        {clientType.id == 0 ? <IndividualFields /> : <OrganizationFields />}

        <Grid item xs={2}>
          <Typography>Номер телефона</Typography>
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            type='tel'
            onBlurHandler={(value: string) => {
              updateClientField('phoneNumber', value);
            }}
          />
        </Grid>
        <Grid item xs={6} />

        <Grid item xs={2}>
          <Typography>ИНН</Typography>
        </Grid>
        <Grid item xs={4}>
          <CustomTextField
            type='number'
            onBlurHandler={(value: string) => {
              updateClientField('INN', +value);
            }}
          />
        </Grid>
        <Grid item xs={6} />

        <Grid item xs={2}>
          <Typography>Адрес</Typography>
        </Grid>
        <Grid item xs={10}>
          <CustomTextField
            onBlurHandler={(value: string) => {
              updateClientField('address', value);
            }}
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default ClientForm;
