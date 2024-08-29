import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new employee';
  }

  async findAll() {
    try {
      const employees = await this.employeeRepository.find();
      return employees;
    } catch (error) {
      throw new Error('Failed to fetch employees: ' + error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }

  async seedDataWithFaker(): Promise<void> {
    const employees: Partial<Employee>[] = [];
    const employeeCount = 10;
    for (let i = 0; i < employeeCount; i++) {
      const employee = new Employee();
      employee.name = faker.name.fullName();
      employee.login = faker.internet.userName();
      employee.password = faker.internet.password();
      employee.comment = faker.lorem.sentence();
      employee.isActive = faker.datatype.boolean();
      employee.series = Number(faker.random.numeric(4));
      employee.number = Number(faker.random.numeric(6));
      employees.push(await this.employeeRepository.save(employee));
    }
  }
}
