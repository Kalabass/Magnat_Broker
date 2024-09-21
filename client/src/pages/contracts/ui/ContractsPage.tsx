import { useProcessedBlanks } from '@/entities/blank'
import CustomTextField from '@/shared/ui/CustomTextField'
import { CompaniesSelect } from '@/widgets/CompaniesSelect'
import { EmployeeSelect } from '@/widgets/EmployeeSelect'
import { InsuranceTypeSelect } from '@/widgets/InsuraceTypeSelect'
import { SellingPointSelect } from '@/widgets/SellingPointSelect'
import {
	Box,
	Button,
	Container,
	Grid,
	Paper,
	Stack,
	Typography,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { FC } from 'react'
import { paginationModel } from '../const/paginationModel'
import { TABLE_COLUMNS_NAMES } from '../const/tableColumnNames'

export const ContractsPage: FC = () => {
	const { data } = useProcessedBlanks()

	const processedBlanks = data?.map((blank, index) => ({
		...blank,
		blankNumber: index + 1,
	}))

	const columns = TABLE_COLUMNS_NAMES
	const rows = processedBlanks

	return (
		<Container
			maxWidth={false}
			sx={{
				background: ' rgb(203, 234, 244)',
				padding: '40px 0 40px 0 ',
				marginTop: '64px',
			}}
		>
			<Stack gap={2}>
				<Paper component={'section'} sx={{ borderRadius: '10px', padding: 5 }}>
					<Button>создать новый</Button>
					<Button>экспорт</Button>
				</Paper>
				<Paper component={'section'} sx={{ borderRadius: '10px', padding: 5 }}>
					<Box
						component={'form'}
						sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
					>
						<Grid container spacing={5}>
							<Grid item container spacing={1} xs={4}>
								<Grid item xs={4}>
									<Typography>Дата заключения</Typography>
								</Grid>
								<Grid item xs={8}>
									<Box
										width={'100%'}
										sx={{
											display: 'flex',
											flexDirection: 'row',
											gap: 1,
											alignItems: 'center',
										}}
									>
										<CustomTextField type='date' />
										-
										<CustomTextField type='date' />
									</Box>
								</Grid>

								<InsuranceTypeSelect />
								<Grid item xs={4}>
									<Typography>Страхователь</Typography>
								</Grid>
								<Grid item xs={8}>
									<CustomTextField />
								</Grid>
							</Grid>
							<Grid item container spacing={1} xs={4}>
								<Grid item xs={4}>
									<Typography>№ Полиса</Typography>
								</Grid>
								<Grid item xs={8}>
									<CustomTextField />
								</Grid>
								<EmployeeSelect />
								<SellingPointSelect />
							</Grid>
							<Grid item container spacing={1} xs={4}>
								<CompaniesSelect />
							</Grid>
						</Grid>
						<Button sx={{ alignSelf: 'end' }} variant='contained'>
							Обновить
						</Button>
					</Box>
				</Paper>
				<Paper component={'section'} sx={{ borderRadius: '10px', padding: 5 }}>
					<DataGrid
						columns={columns}
						rows={rows}
						sx={{
							background: 'white',
							alignItems: 'center',
							border: 0,
							fontSize: '16px',
						}}
						checkboxSelection
						initialState={{ pagination: { paginationModel } }}
					/>
				</Paper>
			</Stack>
		</Container>
	)
}
