import {
	BlankData,
	MutationData,
	MutationDataResponse,
	ProcessedBlank,
} from '@/shared/model/blanksInterfaces';

import { API_ENDPOINTS } from '../../const/APIEndpoints';
import instance from '../axiosInstance';

class BlankService {
	async findAll(): Promise<BlankData[]> {
		try {
			const response = await instance.get(API_ENDPOINTS.BLANK.FIND_ALL);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to fetch all blanks');
			throw error;
		}
	}

	async findOne(id: number): Promise<BlankData> {
		try {
			const response = await instance.get(
				`${API_ENDPOINTS.BLANK.FIND_ALL}/${id}`
			);
			return response.data;
		} catch (error) {
			console.error(error, `Failed to fetch blank №${id}`);
			throw error;
		}
	}

	async findOneProcessed(id: number): Promise<MutationDataResponse> {
		try {
			const response = await instance.get(
				`${API_ENDPOINTS.BLANK.FIND_ALL_PROCESSED}/${id}`
			);
			return response.data;
		} catch (error) {
			console.error(error, `Failed to fetch blank №${id}`);
			throw error;
		}
	}

	async findAllProcessed(
		data?: Partial<MutationData>
	): Promise<ProcessedBlank[]> {
		try {
			const response = await instance.post(
				API_ENDPOINTS.BLANK.FIND_ALL_PROCESSED,
				data
			);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to fetch all processed blanks');
			throw error;
		}
	}

	async allProcessedToExcel(data: Partial<MutationData>) {
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
			console.error(error, 'Failed to export processed blanks to excel');
			throw error;
		}
	}

	async create(data: MutationData): Promise<BlankData> {
		try {
			const response = await instance.post(API_ENDPOINTS.BLANK.CREATE, data);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to create blank  ');
			throw error;
		}
	}

	async update(id: number, data: Partial<MutationData>): Promise<BlankData> {
		try {
			const response = await instance.patch(
				`${API_ENDPOINTS.BLANK.UPDATE}/${id}`,
				data
			);
			return response.data;
		} catch (error) {
			console.error(error, 'Failed to update blank  ');
			throw error;
		}
	}
}

export const blankService = new BlankService();
