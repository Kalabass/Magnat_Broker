import { useBlankStore } from '@/shared/stores/useBlankStore'
import CustomTextField from '@/shared/ui/CustomTextField'
import { Box, Grid, Paper, Typography } from '@mui/material'
import { FC } from 'react'

import { useInsuranceObjectStore } from '@/shared/stores/useInsuranceObjectStore'
import CustomSelect from '../GeneralInfoBlock/CustomSelect'
import { itemData } from '../GeneralInfoBlock/GeneralInfoBlock'

const PAYMENT_TYPES: itemData[] = [
	{ id: 0, name: 'ibox' },
	{ id: 1, name: 'Наличные' },
	{ id: 2, name: 'По ссылке' },
]

const PaymentBlock: FC = () => {
	const { getBlank, updateBlankField } = useBlankStore()
	const { updateInsuranceObjectField } = useInsuranceObjectStore()
	const blank = getBlank()
	return (
		<Paper component={'section'} sx={{ borderRadius: '10px', padding: '40px' }}>
			<Box component={'section'}>
				<Grid container spacing={5} sx={{ paddingBottom: '40px' }}>
					<Grid
						item
						container
						spacing={1}
						xs={6}
						justifyContent='center'
						alignItems='center'
					>
						<Grid item xs={4}>
							<Typography>страховая премия</Typography>
						</Grid>
						<Grid item xs={8}>
							<CustomTextField
								onBlurHandler={value => {
									updateInsuranceObjectField('premium', Number(value))
								}}
							/>
						</Grid>
					</Grid>
					<Grid
						item
						container
						xs={6}
						spacing={1}
						justifyContent='center'
						alignItems='center'
					>
						<Grid item xs={4}>
							<Typography>Способ оплаты</Typography>
						</Grid>
						<Grid item xs={8}>
							<CustomSelect
								items={PAYMENT_TYPES}
								onChangeHandler={value => {
									updateBlankField('paymentType', Number(value))
								}}
							/>
						</Grid>
						{/* TODO: подгружать почту из текущего клиента */}
						{blank.paymentType === 1 && (
							<>
								<Grid item xs={4}>
									<Typography>Почта</Typography>
								</Grid>
								<Grid item xs={8}>
									<CustomTextField type='email' />
								</Grid>
							</>
						)}
					</Grid>
				</Grid>
			</Box>
		</Paper>
	)
}

export default PaymentBlock
