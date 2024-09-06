import { IsNotEmpty } from 'class-validator';
import { Employee } from '../entities/employee.entity';

export class CreateEmployeeDto extends Employee {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  login: string;

  @IsNotEmpty()
  password: string;
}
