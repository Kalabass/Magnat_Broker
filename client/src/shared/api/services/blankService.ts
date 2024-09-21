import { itemData } from '@/pages/contractNew/ui/GeneralInfoBlock/GeneralInfoBlock'
import { BlankData } from '@/shared/stores/useBlankStore'
import { ClientData } from '@/shared/stores/useClientStore'
import { InsuranceObjectData } from '@/shared/stores/useInsuranceObjectStore'
import instance from '../axiosInstance'

export interface ItemDataWithActive {
	isActive: boolean
}

export interface ItemDataName {
	name: string
}

//тип для сервиса и для стора должен быть один
//TODO: вынести в базовый интерфейс поля, которые принадлежать ТОЛЬКО blank, от него наследовать бланк с вложенными полями и бланк подготовленный
export interface Blank {
	id: number
	number: number
	conclusionDate: Date
	activeDateStart: Date
	activeDateEnd: Date
	useDateStart: Date
	useDateEnd: Date
	createdAt: Date
	updatedAt: Date
	isProlonged: boolean
	comment?: string
	client: ItemDataName
	employee: ItemDataName
	sellingPoint: itemData
	insuranceCompany: itemData
	insuranceType: itemData
	insuranceObject: {
		name: string
		year: number
		bank: ItemDataName
		sum: number
		premium: number
	}

	blankSeries: ItemDataName
	previousBlankId?: number
	nextBlankId?: number
	bankId: itemData
}

export interface ProcessedBlank extends Omit<Blank, 'client'> {
	clientName: string
	insuranceTypeName: string
	insuranceCompanyName: string
	insuranceObjectName: string
	insuranceObjectYear: number
	sum: number
	premium: number
	employeeName: string
	sellingPointName: string
	series: string
}

class BlankService {
	private baseUrl = 'blanks'

	private handleError(error: any, message: string) {
		console.error(message, error)
	}

	async findAll(): Promise<Blank[]> {
		try {
			const response = await instance.get(this.baseUrl)
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to fetch all blanks')
			throw error
		}
	}

	async findAllProcessed(): Promise<ProcessedBlank[]> {
		try {
			const response = await instance.get(`${this.baseUrl}/processed`)
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to fetch all processed blanks')
			throw error
		}
	}

	//TODO: вынести все пути в констээээээээнты
	async create(
		blank: Partial<BlankData>,
		client: Partial<ClientData>,
		insuranceObject: Partial<InsuranceObjectData>
	): Promise<Blank> {
		try {
			const response = await instance.post(`${this.baseUrl}/createContract`, {
				client: client,
				insuranceObject: insuranceObject,
				blank: blank,
			})
			return response.data
		} catch (error) {
			this.handleError(error, 'Failed to create blank  ')
			throw error
		}
	}
}

export const blankService = new BlankService()
