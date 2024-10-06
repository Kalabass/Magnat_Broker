import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface ClientData {
  isIndividual: boolean;
  name: string;
  birthDate: Date;
  phoneNumber: string;
  INN: number;
  address: string;
  passportSeries: number;
  passportNumber: number;
}

interface ClientStore {
  client: Partial<ClientData>;
  setClient: (newClient: ClientData) => void;
  updateClientField: <K extends keyof ClientData>(
    key: K,
    value: ClientData[K],
  ) => void;
  getClient: () => Partial<ClientData>;
}

export const useClientStore = create<ClientStore>()(
  devtools((set, get) => ({
    client: {},
    setClient: (newClient) => set({ client: newClient }),

    updateClientField: (key, value) =>
      set((state) => ({
        client: {
          ...state.client,
          [key]: value,
        },
      })),

    getClient: () => get().client,
  })),
);
