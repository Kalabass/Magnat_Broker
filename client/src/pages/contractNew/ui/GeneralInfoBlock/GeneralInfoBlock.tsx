import { useEmployeesNames } from '@/entities/employee';
import { useInsuranceCompaniesNames } from '@/entities/insuranceCompany';
import { useInsuranceTypesNames } from '@/entities/insuranceType';
import { useSellingPointsNames } from '@/entities/sellingPoint';
import { useBlankSeries } from '@/shared/lib/hooks/useBlankSeries';
import { useBlankStore } from '@/shared/stores/useBlankStore';
import { FormGroup, Grid, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import BlankNumberBlock from './BlankNumberBlock';
import CustomSelect from './SelectWithTitle';
import TimeBLock from './TimeBLock';

export interface itemData {
  id: number;
  name: string;
}

const MORTGAGE_TYPES: itemData[] = [
  { id: 0, name: 'жизнь' },
  { id: 1, name: 'жилье' },
];

const GeneralInfoBlock: FC = () => {
  const { getBlank } = useBlankStore();
  const blank = getBlank();

  const { data: companiesData } = useInsuranceCompaniesNames();
  const { data: agentsData } = useEmployeesNames();
  const { data: typesData } = useInsuranceTypesNames();
  const { data: sellingPointsData } = useSellingPointsNames();
  const { data: blankSeriesData } = useBlankSeries();

  const AGENTS = agentsData;
  const COMPANIES = companiesData;
  const INSURANCE_TYPES = typesData;
  const SELLING_POINTS = sellingPointsData;
  const BLANK_SERIES = blankSeriesData;

  const { updateBlankField } = useBlankStore();
  return (
    <Paper sx={{ borderRadius: '10px', padding: 5 }}>
      <FormGroup>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Grid container spacing={1}>
              <TimeBLock />
              {AGENTS && (
                <>
                  <Grid item xs={4}>
                    <Typography>Агент</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomSelect
                      items={AGENTS}
                      onChangeHandler={(value) => {
                        updateBlankField('agent', Number(value));
                      }}
                    />
                  </Grid>
                </>
              )}
              {COMPANIES && (
                <>
                  <Grid item xs={4}>
                    <Typography>СК</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomSelect
                      items={COMPANIES}
                      onChangeHandler={(value) => {
                        updateBlankField('company', Number(value));
                      }}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={1}>
              {/* TODO: возможно сделать так, чтобы от компании менялся тип
              страхования */}
              {INSURANCE_TYPES && (
                <>
                  <Grid item xs={4}>
                    <Typography>Вид</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomSelect
                      items={INSURANCE_TYPES}
                      onChangeHandler={(value) => {
                        updateBlankField('insuranceType', Number(value));
                      }}
                    />
                  </Grid>
                </>
              )}
              {/* FIXME: вынести ИПОТЕКА в константы */}
              {/* FIXME: подумать что делать с перерисовками */}
              {blank.insuranceType === 4 && (
                <>
                  <Grid item xs={4}>
                    <Typography>Направление</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomSelect
                      items={MORTGAGE_TYPES}
                      onChangeHandler={(value) => {
                        updateBlankField('mortgageType', Number(value));
                      }}
                    />
                  </Grid>
                </>
              )}

              {BLANK_SERIES && <BlankNumberBlock items={BLANK_SERIES} />}
              {SELLING_POINTS && (
                <>
                  <Grid item xs={4}>
                    <Typography>Точка продажи</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <CustomSelect
                      items={SELLING_POINTS}
                      onChangeHandler={(value) => {
                        updateBlankField('sellPoint', Number(value));
                      }}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </FormGroup>
    </Paper>
  );
};

export default GeneralInfoBlock;
