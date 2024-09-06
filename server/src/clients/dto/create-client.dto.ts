import { IsNotEmpty } from 'class-validator';
import { Client } from '../entities/client.entity';

export class CreateClientDto extends Client {
  @IsNotEmpty()
  name: string;
}
