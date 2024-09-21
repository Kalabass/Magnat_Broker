import { useSellingPointsNames } from '@/entities/sellingPoint'
import { CustomSelectWithTitle } from '@/features/CustomSelectWithTitle'
import { useBlankStore } from '@/shared/stores/useBlankStore'
import { FC } from 'react'

export const SellingPointSelect: FC = () => {
	const { updateBlankField } = useBlankStore()
	const { data: SELLING_POINTS } = useSellingPointsNames()
	return (
		<CustomSelectWithTitle
			title='Точка продажи'
			items={SELLING_POINTS}
			onChangeHandler={value => {
				updateBlankField('sellingPointId', value)
			}}
		/>
	)
}
