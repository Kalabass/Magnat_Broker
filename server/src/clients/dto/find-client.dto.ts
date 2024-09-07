import {PickType} from '@nestjs/mapped-types';
import {UpdateClientDto} from './update-client.dto';

export class FindClientDto extends PickType(UpdateClientDto, ['name', 'inn', 'series', 'number', 'dateOfBirth']) {}
