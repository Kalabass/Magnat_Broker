import { itemData } from '@/pages/contractNew/ui/GeneralInfoBlock/GeneralInfoBlock';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export enum BlankSeriesEnum {
  XXX = 'XXX',
  TTT = 'TTT',
  AAB = 'AAB',
}

export interface BlankData {
  conclusionDate: Date;
  activeDateFrom: Date;
  activeDateTo: Date;
  useDateFrom: Date;
  useDateTo: Date;
  insurance_type: itemData;
  mortgage_type: itemData;
  agent: itemData;
  company: itemData;
  blankSeries: BlankSeriesEnum;
  blankNumber: string;
  sellPoint: string;
  bank: itemData;
  paymentType: itemData;
}

interface BlankStore {
  blank: Partial<BlankData>;
  setBlank: (newBlank: BlankData) => void;
  updateBlankField: <K extends keyof BlankData>(
    key: K,
    value: BlankData[K],
  ) => void;
  getBlank: () => Partial<BlankData>;
}

export const useBlankStore = create<BlankStore>()(
  devtools((set, get) => ({
    blank: {
      conclusionDate: undefined,
      activeDateFrom: undefined,
      activeDateTo: undefined,
      useDateFrom: undefined,
      useDateTo: undefined,
      type: undefined,
    },

    setBlank: (newBlank) => set({ blank: newBlank }),

    updateBlankField: (key, value) =>
      set((state) => ({
        blank: {
          ...state.blank,
          [key]: value,
        },
      })),

    getBlank: () => get().blank,
  })),
);
