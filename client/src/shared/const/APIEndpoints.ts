const AUTH_ENDPOINTS = {
	LOGIN: 'auth/login',
	REFRESH_TOKENS: 'auth/refreshTokens',
};

const BANK_ENDPOINTS = {
	FIND_ALL: 'banks',
	FIND_ALL_NAMES: 'banks/names',
};

const BLANK_SERIES_ENDPOINTS = {
	FIND_ALL: 'blankSeries',
};

const BLANK_ENDPOINTS = {
	FIND_ALL: 'blanks',
	FIND_ALL_PROCESSED: 'blanks/processed',
	ALL_PROCESSED_TO_EXCEL: 'blanks/processed/export-excel',
	CREATE: 'blanks',
};

const CLIENT_ENDPOINTS = {
	FIND_ALL: 'blankSeries',
};

const EMPLOYEE_ENDPOINTS = {
	FIND_ALL: 'employees',
	FIND_ALL_NAMES: 'employees/names',
};

const INSURANCE_COMPANY_ENDPOINTS = {
	FIND_ALL: 'insuranceCompanies',
	FIND_ALL_NAMES: 'insuranceCompanies/names',
};

const INSURANCE_TYPE_ENDPOINTS = {
	FIND_ALL: 'insuranceTypes',
	FIND_ALL_NAMES: 'insuranceTypes/names',
};

const SELLING_POINT_ENDPOINTS = {
	FIND_ALL: 'sellingPoints',
	FIND_ALL_NAMES: 'sellingPoints/names',
};

const PAYMENT_TYPES_ENDPOINTS = {
	FIND_ALL: 'paymentTypes',
};

export const API_ENDPOINTS = {
	AUTH: AUTH_ENDPOINTS,
	BANK: BANK_ENDPOINTS,
	BLANK_SERIES: BLANK_SERIES_ENDPOINTS,
	BLANK: BLANK_ENDPOINTS,
	CLIENT: CLIENT_ENDPOINTS,
	EMPLOYEE: EMPLOYEE_ENDPOINTS,
	INSURANCE_COMPANY: INSURANCE_COMPANY_ENDPOINTS,
	INSURANCE_TYPE: INSURANCE_TYPE_ENDPOINTS,
	SELLING_POINT: SELLING_POINT_ENDPOINTS,
	PAYMENT_TYPE: PAYMENT_TYPES_ENDPOINTS,
};
