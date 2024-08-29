import { itemData } from '@/pages/contractNew/ui/GeneralInfoBlock/GeneralInfoBlock';
import instance from '../axiosInstance';

export interface ItemDataWithActive {
  isActive: boolean;
}

export interface ItemDataName {
  name: string;
}

export interface Blank {
  id: number;
  series?: string;
  number: string;
  conclusionDate: Date;
  activeDateStart: Date;
  activeDateEnd: Date;
  useDateStart: Date;
  useDateEnd: Date;
  createdAt: Date;
  updatedAt: Date;
  sum: number;
  premium: number;
  isProlonged: boolean;
  previousBlankId?: number;
  nextBlankId?: number;
  comment?: string;
  client: ItemDataName;
  employee: ItemDataName;
  bankId: itemData;
  insuranceCompany: itemData;
  insuranceType: itemData;
  sellingPoint: itemData;
}

class BlankService {
  private baseUrl = 'blanks';

  private handleError(error: any, message: string) {
    console.error(message, error);
  }

  async findAll(): Promise<Blank[]> {
    try {
      const response = await instance.get<Blank[]>(this.baseUrl);
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to fetch all blanks');
      throw error;
    }
  }
}

export const blankService = new BlankService();
