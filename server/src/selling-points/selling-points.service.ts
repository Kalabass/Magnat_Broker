import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeedOptions } from 'src/constants/seedOptions';
import { Repository } from 'typeorm';
import { CreateSellingPointDto } from './dto/create-selling-point.dto';
import { UpdateSellingPointDto } from './dto/update-selling-point.dto';
import { SellingPoint } from './entities/selling-point.entity';

@Injectable()
export class SellingPointsService {
  constructor(
    @InjectRepository(SellingPoint)
    private readonly sellingPointRepository: Repository<SellingPoint>,
  ) {}
  create(createSellingPointDto: CreateSellingPointDto) {
    return 'This action adds a new sellingPoint';
  }

  async findAll() {
    try {
      const sellingPoints = await this.sellingPointRepository.find();
      return sellingPoints;
    } catch (error) {
      throw new Error('Failed to fetch selling points: ' + error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} sellingPoint`;
  }

  update(id: number, updateSellingPointDto: UpdateSellingPointDto) {
    return `This action updates a #${id} sellingPoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellingPoint`;
  }

  async seedDataWithFaker(): Promise<void> {
    const banks: Partial<SellingPoint>[] = [];
    for (let i = 0; i < SeedOptions.SELLING_POINT.seedCount; i++) {
      const bank = new SellingPoint();
      bank.name = faker.company.name();
      bank.comment = faker.lorem.sentence();
      banks.push(await this.sellingPointRepository.save(bank));
    }
  }
}
