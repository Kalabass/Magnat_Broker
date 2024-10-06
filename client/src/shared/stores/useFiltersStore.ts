import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export interface FilterData {
	conclusionDateStart: Date
	conclusionDateEnd: Date

	client: string
	policeNumber: string

	typeId: number
	employeeId: number
	sellingPointId: number

	insuranceCompanyId: number
}

interface FiltersStore {
	filters: Partial<FilterData>
	setFilters: (newFilters: FilterData) => void
	updateFiltersField: <K extends keyof FilterData>(
		key: K,
		value: FilterData[K] | undefined
	) => void
	getFilters: () => Partial<FilterData>
}

export const useFiltersStore = create<FiltersStore>()(
	devtools((set, get) => ({
		filters: {},

		setFilters: newFilters => set({ filters: newFilters }),

		updateFiltersField: (key, value) =>
			set(state => ({
				filters: {
					...state.filters,
					[key]: value,
				},
			})),

		getFilters: () => get().filters,
	}))
)
