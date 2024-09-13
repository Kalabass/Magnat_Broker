import { CustomToggle } from '@/features/ClientTypeToggle';
import { CLIENT_TYPES } from '@/pages/contractNew/constants/clinetTypes.const';
import { useClientStore } from '@/shared/stores/useClientStore';
import CustomTextField from '@/shared/ui/CustomTextField';
import { FormGroup, Grid, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import IndividualFields from './IndividualFields';
import OrganizationFields from './OrganizationFields';

const ClientForm: FC = () => {
  const { updateClientField, getClient } = useClientStore();
  const client = getClient();
  useEffect(() => {
    updateClientField('isIndividual', true);
  }, []);

  return (
    <FormGroup>
      <Grid item container spacing={1}>
        <Grid item xs={12}>
          <CustomToggle
            items={CLIENT_TYPES}
            onClick={(value) => updateClientField('isIndividual', value)}
          />
        </Grid>

        {client.isIndividual ? <IndividualFields /> : <OrganizationFields />}

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
