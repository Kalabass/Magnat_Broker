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
  insuranceType: number;
  mortgageType: number;
  agent: number;
  company: number;
  blankSeries: number;
  blankNumber: string;
  sellPoint: number;
  bank: number;
  insuranceAmount: number;
  paymentType: number;
  premium: number;
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
      insuranceAmount: undefined,
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
