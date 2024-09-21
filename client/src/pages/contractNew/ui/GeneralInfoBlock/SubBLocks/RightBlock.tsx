import { useBlankSeries } from '@/shared/lib/hooks/useBlankSeries'
import { useBlankStore } from '@/shared/stores/useBlankStore'
import { FC } from 'react'

import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle'
import { InsuranceTypeSelect } from '@/widgets/InsuraceTypeSelect'
import { SellingPointSelect } from '@/widgets/SellingPointSelect'
import { itemData } from '../GeneralInfoBlock'
import BlankNumberBlock from './BlankNumberBlock'

const MORTGAGE_TYPES: itemData[] = [
	{ id: 0, name: 'жизнь' },
	{ id: 1, name: 'жилье' },
]

const RightBlock: FC = () => {
	const { getBlank, updateBlankField } = useBlankStore()
	const blank = getBlank()
	const { data: BLANK_SERIES } = useBlankSeries()

	return (
		<>
			{/* FIXME: вынести ИПОТЕКА в константы */}
			{/* FIXME: подумать что делать с перерисовками */}
			<InsuranceTypeSelect />
			{blank.insuranceTypeId === 4 && (
				<CustomSelectWithTitle
					title='Направление'
					items={MORTGAGE_TYPES}
					onChangeHandler={value => {
						updateBlankField('mortgageType', value)
					}}
				/>
			)}

			{BLANK_SERIES && <BlankNumberBlock items={BLANK_SERIES} />}
			<SellingPointSelect />
		</>
	)
}

export default RightBlock
