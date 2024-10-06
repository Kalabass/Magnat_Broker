import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface InsuranceObjectData {
  id: number;
  sum: number;
  premium: number;
  name?: string;
  horsePowers?: number;
  year?: number;
  isCredited?: boolean;
  bank?: number | null; // Используем id банка
  insuranceObjectType: number | null; // Используем id типа объекта страхования
  blanks: number[]; // Массив id бланков
}
export interface InsuranceObjectBaseData
  extends Omit<InsuranceObjectData, 'id' | 'blanks'> {}

interface InsuranceObjectStore {
  insuranceObject: Partial<InsuranceObjectBaseData>;
  setInsuranceObject: (newObject: InsuranceObjectBaseData) => void;
  updateInsuranceObjectField: <K extends keyof InsuranceObjectBaseData>(
    key: K,
    value: InsuranceObjectBaseData[K],
  ) => void;
  getInsuranceObject: () => Partial<InsuranceObjectBaseData>;
}

export const useInsuranceObjectStore = create<InsuranceObjectStore>()(
  devtools((set, get) => ({
    insuranceObject: {},
    setInsuranceObject: (newObject) => set({ insuranceObject: newObject }),

    updateInsuranceObjectField: (key, value) =>
      set((state) => ({
        insuranceObject: {
          ...state.insuranceObject,
          [key]: value,
        },
      })),

    getInsuranceObject: () => get().insuranceObject,
  })),
);
