import { GridColDef } from '@mui/x-data-grid'

export const TABLE_COLUMNS_NAMES: GridColDef[] = [
	{
		field: 'blankNumber',
		headerName: '№',
		headerAlign: 'center',
		align: 'center',
		width: 90,
	},
	{
		field: 'conclusionDate',
		headerName: 'Дата',
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'insuranceTypeName',
		headerName: 'Вид',
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'insuranceCompanyName',
		headerName: 'СК',
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'clientName',
		headerName: 'Страхователь',
		width: 130,
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'insuranceObjectName',
		headerName: 'Объект',
		width: 150,
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'insuranceObjectYear',
		headerName: 'Год',
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'employeeName',
		headerName: 'Агент',
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'sellingPointName',
		headerName: 'Точка',
		align: 'center',
		headerAlign: 'center',
	},
	// {
	// 	field: 'bankName',
	// 	headerName: 'Банк',
	// 	align: 'center',
	// 	headerAlign: 'center',
	// },
	{
		field: 'seriesNumber',
		headerName: '№ Полиса',
		width: 150,
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'isProlonged',
		headerName: 'Пролонгированный',
		type: 'boolean',

		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'dateRange',
		headerName: 'Срок',
		width: 200,
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'sum',
		headerName: 'Сумма',
		type: 'number',
		align: 'center',
		headerAlign: 'center',
	},
	{
		field: 'premium',
		headerName: 'Премия',
		type: 'number',
		align: 'center',
		headerAlign: 'center',
	},
]
