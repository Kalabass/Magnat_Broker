import { faker } from '@faker-js/faker';
import { Injectable, NotFoundException } from '@nestjs/common';
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

  private readonly handleError = (error: any) => {
    console.error(error);
    throw error;
  };

  private async findEmployeeById(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOne({ where: { id } });
    if (!employee) {
      throw new NotFoundException('Employee not found');
    }
    return employee;
  }

  async create(createEmployeeDto: CreateEmployeeDto) {
    try {
      return await this.employeeRepository.save(createEmployeeDto);
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    try {
      const employees = await this.employeeRepository.find();
      return employees;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAllNames() {
    try {
      const employees = await this.employeeRepository.find({
        select: ['id', 'name'],
      });
      return employees;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.findEmployeeById(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      const employee = await this.findEmployeeById(id);
      return await this.employeeRepository.update(
        employee.id,
        updateEmployeeDto,
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    try {
      const employee = await this.findEmployeeById(id);
      return await this.employeeRepository.delete(employee.id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async seedDataWithFaker(): Promise<void> {
    const employees: Partial<Employee>[] = [];
    for (let i = 0; i < 10; i++) {
      const employee = new Employee();
      employee.name = faker.person.fullName();
      employee.login = faker.internet.userName();
      employee.password = faker.internet.password();
      employee.comment = faker.lorem.sentence();
      employee.isActive = faker.datatype.boolean();
      employee.series = faker.number.int({ min: 1111, max: 9999 });
      employee.number = faker.number.int({ min: 111111, max: 999999 });
      employees.push(await this.employeeRepository.save(employee));
    }
  }
}
