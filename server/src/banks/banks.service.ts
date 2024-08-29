import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
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
  create(createBankDto: CreateBankDto) {
    return 'This action adds a new bank';
  }

  async findAll() {
    const banks = await this.bankRepository.find();
    return banks;
  }

  findOne(id: number) {
    return `This action returns a #${id} bank`;
  }

  update(id: number, updateBankDto: UpdateBankDto) {
    return `This action updates a #${id} bank`;
  }

  remove(id: number) {
    return `This action removes a #${id} bank`;
  }

  async seedDataWithFaker(): Promise<void> {
    const banks: Partial<Bank>[] = [];

    for (let i = 0; i < SeedOptions.BANK.seedCount; i++) {
      const bank = new Bank();
      bank.name = faker.company.name();
      bank.comment = faker.lorem.sentence();
      banks.push(await this.bankRepository.save(bank));
    }
  }
}
