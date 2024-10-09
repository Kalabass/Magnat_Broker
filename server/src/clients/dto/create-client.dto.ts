import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Client } from '../entities/client.entity';

export class CreateClientDto extends PartialType(Client) {
	@IsNotEmpty()
	name: string;
}
