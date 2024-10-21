import { BankData } from './bankInterfaces';

export interface InsuranceObjectData {
	id: number;
	name: string | null;
	horsePowers: number | null;
	year: number | null;
	isCredited: boolean;
	bank: BankData | null;
}
