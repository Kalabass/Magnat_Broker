import { ItemData } from '@/shared/model/interface';

export const CLIENT_TYPE_NAME_INDIVIDUAL = 'ФЛ';
export const CLIENT_TYPE_NAME_ORGANIZATION = 'ЮЛ';

export const CLIENT_TYPES: ItemData[] = [
	{
		id: 0,
		name: CLIENT_TYPE_NAME_INDIVIDUAL,
	},
	{
		id: 1,
		name: CLIENT_TYPE_NAME_ORGANIZATION,
	},
];
