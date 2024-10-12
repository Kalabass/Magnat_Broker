import { IMutationData } from '@/entities/blank/lib/useCreateBlank.mutation';
import { itemData } from '@/pages/contractNew/ui/GeneralInfoBlock/GeneralInfoBlock';
import { handleError } from '@/shared/lib/utils/errorHandler';
import { FilterData } from '@/shared/stores/useFiltersStore';
import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

export interface ItemDataWithActive {
	isActive: boolean;
}

export interface ItemDataName {
	name: string;
}

//тип для сервиса и для стора должен быть один
//TODO: вынести в базовый интерфейс поля, которые принадлежать ТОЛЬКО blank, от него наследовать бланк с вложенными полями и бланк подготовленный
export interface Blank {
	id: number;
	number: number;
	conclusionDate: Date;
	activeDateStart: Date;
	activeDateEnd: Date;
	useDateStart: Date;
	useDateEnd: Date;
	createdAt: Date;
	updatedAt: Date;
	isProlonged: boolean;
	comment?: string;
	client: ItemDataName;
	employee: ItemDataName;
	sellingPoint: itemData;
	insuranceCompany: itemData;
	insuranceType: itemData;
	insuranceObject: {
		name: string;
		year: number;
		bank: ItemDataName;
		sum: number;
		premium: number;
	};

	blankSeries: ItemDataName;
	previousBlankId?: number;
	nextBlankId?: number;
	bankId: itemData;
}

export interface ProcessedBlank extends Omit<Blank, 'client' | 'bankId'> {
	clientName: string;
	insuranceTypeName: string;
	insuranceCompanyName: string;
	insuranceObjectName: string;
	insuranceObjectYear: number;
	sum: number;
	premium: number;
	employeeName: string;
	sellingPointName: string;
	series: string;
}

export type MortgageType = 'Жизнь' | 'Жильё';
export interface IMutationDataResponse {
	blankConclusionDate: string;
	blankActiveDateStart: string;
	blankActiveDateEnd: string;
	blankUseDateStart: string;
	blankUseDateEnd: string;
	blankNumber: string;
	blankSeriesId: number;
	blankEmployeeId: number;
	blankInsuranceCompanyId: number;
	blankInsuranceTypeId: number;
	blankMortgageType: MortgageType;
	blankSellingPointId: number;
	blankPremium: number;
	blankSum: number;
	blankBankId: number;
	blankPaymentTypeId: number;
	blankEmail: string;

	clientIsLegal: boolean;
	clientBirthDate: string;
	clientName: string;
	clientINN: number;
	clientPassportNumber: number;
	clientPassportSeries: number;
	clientPhoneNumber: string;
	clientAddress: string;

	insuranceObjectHorsePowers: number;
	insuranceObjectName: string;
}

class BlankService {
	async findAll(): Promise<Blank[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.BLANK.FIND_ALL);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all blanks');
			throw error;
		}
	}

	async findOne(id: number): Promise<Blank> {
		try {
			const response = await instance.get(
				`${API_ENDPOINTS.BLANK.FIND_ALL}/${id}`
			);
			return response.data;
		} catch (error) {
			handleError(error, `Failed to fetch blank №${id}`);
			throw error;
		}
	}

	async findOneProcessed(id: number): Promise<IMutationDataResponse> {
		try {
			const response = await instance.get(
				`${API_ENDPOINTS.BLANK.FIND_ALL_PROCESSED}/${id}`
			);
			return response.data;
		} catch (error) {
			handleError(error, `Failed to fetch blank №${id}`);
			throw error;
		}
	}

	async findAllProcessed(data: Partial<FilterData>): Promise<ProcessedBlank[]> {
		try {
			const response = await instance.post(
				API_ENDPOINTS.BLANK.FIND_ALL_PROCESSED,
				data
			);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to fetch all processed blanks');
			throw error;
		}
	}

	async allProcessedToExcel(data: Partial<FilterData>) {
		try {
			const response = await instance.post(
				API_ENDPOINTS.BLANK.ALL_PROCESSED_TO_EXCEL,
				data,
				{
					responseType: 'blob',
				}
			);
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', 'processed_blanks.xlsx');
			document.body.appendChild(link);
			link.click();
			link.remove();
		} catch (error) {
			handleError(error, 'Failed to export processed blanks to excel');
			throw error;
		}
	}

	async create(data: IMutationData): Promise<Blank> {
		try {
			const response = await instance.post(API_ENDPOINTS.BLANK.CREATE, data);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to create blank  ');
			throw error;
		}
	}

	async update(id: number, data: Partial<IMutationData>): Promise<Blank> {
		try {
			const response = await instance.patch(
				`${API_ENDPOINTS.BLANK.UPDATE}/${id}`,
				data
			);
			return response.data;
		} catch (error) {
			handleError(error, 'Failed to update blank  ');
			throw error;
		}
	}
}

export const blankService = new BlankService();
