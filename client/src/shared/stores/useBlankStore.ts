import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export enum BlankSeriesEnum {
	XXX = 'XXX',
	TTT = 'TTT',
	AAB = 'AAB',
}

export interface BlankData {
	conclusionDate: Date
	activeDateStart: Date
	activeDateEnd: Date
	useDateStart: Date
	useDateEnd: Date
	// insuranceType: number
	mortgageType: number
	// agent: number
	// company: number
	// series: number
	number: string
	// sellingPoint: number
	bank: number
	paymentType: number

	insuranceCompanyId: number
	blankSeriesId: number
	sellingPointId: number
	insuranceTypeId: number
	employeeId: number
}

interface BlankStore {
	blank: Partial<BlankData>
	setBlank: (newBlank: BlankData) => void
	updateBlankField: <K extends keyof BlankData>(
		key: K,
		value: BlankData[K]
	) => void
	getBlank: () => Partial<BlankData>
}

export const useBlankStore = create<BlankStore>()(
	devtools((set, get) => ({
		blank: {
			conclusionDate: undefined,
			activeDateStart: undefined,
			activeDateEnd: undefined,
			useDateStart: undefined,
			useDateEnd: undefined,
			type: undefined,
			insuranceAmount: undefined,
		},

		setBlank: newBlank => set({ blank: newBlank }),

		updateBlankField: (key, value) =>
			set(state => ({
				blank: {
					...state.blank,
					[key]: value,
				},
			})),

		getBlank: () => get().blank,
	}))
)
