import { useEmployeesNames } from '@/entities/employee';
import { useInsuranceCompaniesNames } from '@/entities/insuranceCompany';
import { useInsuranceTypesNames } from '@/entities/insuranceType';
import { useSellingPointsNames } from '@/entities/sellingPoint';
import { useBlankSeries } from '@/shared/lib/hooks/useBlankSeries';
import { useBlankStore } from '@/shared/stores/useBlankStore';
import { FormGroup, Grid, Paper } from '@mui/material';
import { FC } from 'react';
import BlankNumberBlock from './BlankNumberBlock';
import SelectWithTitle from './SelectWithTitle';
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

  return (
    <Paper sx={{ borderRadius: '10px', padding: 5 }}>
      <FormGroup>
        <Grid container spacing={5}>
          <Grid item xs={6}>
            <Grid container spacing={1}>
              <TimeBLock />
              {AGENTS && (
                <SelectWithTitle
                  items={AGENTS}
                  title='Агент'
                  blankKey='agent'
                />
              )}
              {COMPANIES && (
                <SelectWithTitle
                  items={COMPANIES}
                  title='СК'
                  blankKey='company'
                />
              )}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={1}>
              {/* TODO: возможно сделать так, чтобы от компании менялся тип
              страхования */}
              {INSURANCE_TYPES && (
                <SelectWithTitle
                  items={INSURANCE_TYPES}
                  title='Вид'
                  blankKey='insuranceType'
                />
              )}
              {/* FIXME: вынести ИПОТЕКА в константы */}
              {/* FIXME: подумать что делать с перерисовками */}
              {blank.insuranceType?.name.toUpperCase() === 'ИПОТЕКА' && (
                <SelectWithTitle
                  items={MORTGAGE_TYPES}
                  title='Направление'
                  blankKey='mortgageType'
                />
              )}

              {BLANK_SERIES && <BlankNumberBlock items={BLANK_SERIES} />}
              {SELLING_POINTS && (
                <SelectWithTitle
                  items={SELLING_POINTS}
                  title='Точка продажи'
                  blankKey='sellPoint'
                />
              )}
            </Grid>
          </Grid>
        </Grid>
      </FormGroup>
    </Paper>
  );
};

export default GeneralInfoBlock;
