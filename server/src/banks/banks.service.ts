import { faker } from '@faker-js/faker';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SeedOptions } from 'src/constants/seedOptions';
import { Repository } from 'typeorm';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Bank } from './entities/bank.entity';

@Injectable()
export class BanksService {
  constructor(
    @InjectRepository(Bank) private readonly bankRepository: Repository<Bank>,
  ) {}

  private readonly handleError = (error: any) => {
    console.error(error);
    throw error;
  };

  private async findBankById(id: number): Promise<Bank> {
    const bank = await this.bankRepository.findOne({ where: { id } });
    if (!bank) {
      throw new NotFoundException('Bank not found');
    }
    return bank;
  }

  async create(createBankDto: CreateBankDto) {
    try {
      return await this.bankRepository.save(createBankDto);
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    try {
      const banks = await this.bankRepository.find();
      return banks;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAllNames() {
    try {
      const banks = await this.bankRepository.find({
        select: ['id', 'name'],
      });
      return banks;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.findBankById(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: number, updateBankDto: UpdateBankDto) {
    try {
      const bank = await this.findBankById(id);
      return await this.bankRepository.update(bank.id, updateBankDto);
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    try {
      const bank = await this.findBankById(id);
      return await this.bankRepository.delete(bank.id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async seedDataWithFaker(): Promise<void> {
    const banks: Partial<Bank>[] = [];

    for (let i = 0; i < SeedOptions.BANK.seedCount; i++) {
      banks.push({
        name: faker.company.name(),
        comment: faker.lorem.sentence(),
      });
    }

    await this.bankRepository.save(banks);
  }
}
