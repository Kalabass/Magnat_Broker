// hooks/useInitializeDates.ts
import { useBlankStore } from '@/shared/stores/useBlankStore';
import { useEffect } from 'react';
import { getDefaultDates } from './dateUtils';

export const useInitializeDates = () => {
  const { updateBlankField, getBlank } = useBlankStore();
  const blank = getBlank();

  useEffect(() => {
    const { defaultStartDate, defaultEndDate } = getDefaultDates();

    if (!blank.conclusionDate)
      updateBlankField('conclusionDate', defaultStartDate);
    if (!blank.activeDateFrom)
      updateBlankField('activeDateFrom', defaultStartDate);
    if (!blank.activeDateTo) updateBlankField('activeDateTo', defaultEndDate);
    if (!blank.useDateFrom) updateBlankField('useDateFrom', defaultStartDate);
    if (!blank.useDateTo) updateBlankField('useDateTo', defaultEndDate);
  }, []);
};
