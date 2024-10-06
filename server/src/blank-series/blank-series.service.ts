import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBlankSeriesDto } from './dto/create-blank-series.dto';

import { UpdateBlankSeriesDto } from './dto/update-blank-series.dto';
import { BlankSeries } from './entities/blank-series.entity';

@Injectable()
export class BlankSeriesService {
  constructor(
    @InjectRepository(BlankSeries)
    private readonly blankSeriesRepository: Repository<BlankSeries>,
  ) {}

  private readonly handleError = (error: any) => {
    console.error(error);
    throw error;
  };

  private async findBlankSeriesById(id: number): Promise<BlankSeries> {
    const blankSeries = await this.blankSeriesRepository.findOne({
      where: { id },
    });

    if (!blankSeries) {
      throw new NotFoundException('Blank series not found');
    }

    return blankSeries;
  }

  async create(createBlankSeriesDto: CreateBlankSeriesDto) {
    try {
      return await this.blankSeriesRepository.save(createBlankSeriesDto);
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    try {
      return await this.blankSeriesRepository.find();
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.findBlankSeriesById(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: number, updateBlankSeriesDto: UpdateBlankSeriesDto) {
    try {
      const blankSeries = await this.findBlankSeriesById(id);
      return await this.blankSeriesRepository.update(
        blankSeries.id,
        updateBlankSeriesDto,
      );
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    try {
      const blankSeries = await this.findBlankSeriesById(id);
      return await this.blankSeriesRepository.delete(blankSeries.id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async seedData(): Promise<void> {
    const seriesNames = ['TTT', 'AAB', 'XXX'];

    const blankSeriesEntities: Partial<BlankSeries>[] = [];

    seriesNames.forEach((name) => {
      blankSeriesEntities.push({ name });
    });
    await this.blankSeriesRepository.save(blankSeriesEntities);
  }
}
