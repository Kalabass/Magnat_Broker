import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}
  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client';
  }

  async findAll() {
    try {
      const clients = await this.clientRepository.find();
      return clients;
    } catch (error) {
      throw new Error('Failed to fetch clients: ' + error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }

  async seedDataWithFaker(): Promise<void> {
    const clients: Partial<Client>[] = [];
    const clientCount = 10;
    for (let i = 0; i < clientCount; i++) {
      const client = new Client();
      client.name = faker.name.fullName();
      client.dateOfBirth = faker.date.birthdate({
        min: 18,
        max: 80,
        mode: 'age',
      });
      client.phone = faker.phone.number();
      client.inn = Number(faker.random.numeric(10));
      client.address = faker.address.streetAddress();
      client.series = Number(faker.random.numeric(4));
      client.number = Number(faker.random.numeric(6));
      client.comment = faker.lorem.sentence();
      clients.push(await this.clientRepository.save(client));
    }
  }
}
