import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeedOptions } from 'src/constants/seedOptions';
import { Repository } from 'typeorm';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    return 'This action adds a new vehicle';
  }

  async findAll() {
    const vehicle = await this.vehicleRepository.find();
    return vehicle;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehicle`;
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }

  async seedDataWithFaker(): Promise<void> {
    const vehicles: Partial<Vehicle>[] = [];

    for (let i = 0; i < SeedOptions.Vehicle.seedCount; i++) {
      const vehicle = new Vehicle();
      vehicle.name = faker.vehicle.vehicle();
      vehicle.power = faker.number.int({ min: 80, max: 333 });
      vehicle.year = faker.number.int({ min: 1990, max: 2024 });
      vehicles.push(await this.vehicleRepository.save(vehicle));
    }
  }
}
