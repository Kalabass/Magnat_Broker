import { faker } from '@faker-js/faker';
import { Injectable, NotFoundException } from '@nestjs/common';
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

  private readonly handleError = (error: any) => {
    console.error(error);
    throw error;
  };

  private async findSellingPointById(id: number): Promise<SellingPoint> {
    const sellingPoint = await this.sellingPointRepository.findOne({
      where: { id },
    });
    if (!sellingPoint) {
      throw new NotFoundException('Selling point not found');
    }
    return sellingPoint;
  }

  async create(createSellingPointDto: CreateSellingPointDto) {
    try {
      return await this.sellingPointRepository.save(createSellingPointDto);
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    try {
      const sellingPoints = await this.sellingPointRepository.find();
      return sellingPoints;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAllNames() {
    try {
      const sellingPoints = await this.sellingPointRepository.find({
        select: ['id', 'name'],
      });
      return sellingPoints;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.findSellingPointById(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: number, updateSellingPointDto: UpdateSellingPointDto) {
    try {
      const sellingPoint = await this.findSellingPointById(id);
      return await this.sellingPointRepository.update(
        sellingPoint.id,
        updateSellingPointDto,
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    try {
      const sellingPoint = await this.findSellingPointById(id);
      return await this.sellingPointRepository.delete(sellingPoint.id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async seedDataWithFaker(): Promise<void> {
    const sellingPoints: Partial<SellingPoint>[] = [];

    for (let i = 0; i < SeedOptions.SELLING_POINT.seedCount; i++) {
      sellingPoints.push({
        name: faker.company.name(),
        comment: faker.lorem.sentence(),
      });
    }

    await this.sellingPointRepository.save(sellingPoints);
  }
}
