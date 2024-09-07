import {faker} from '@faker-js/faker';
import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {CreateClientDto} from './dto/create-client.dto';
import {UpdateClientDto} from './dto/update-client.dto';
import {Client} from './entities/client.entity';
import {FindClientDto} from './dto/find-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  private readonly handleError = (error: any) => {
    console.error(error);
    throw error;
  };

  private async findClientById(id: number): Promise<Client> {
    const client = await this.clientRepository.findOne({ where: { id } });
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return client;
  }

  async create(createClientDto: CreateClientDto) {
    try {
      return await this.clientRepository.save(createClientDto);
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    try {
      const clients = await this.clientRepository.find();
      return clients;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.findClientById(id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    try {
      const client = await this.findClientById(id);
      return await this.clientRepository.update(client.id, updateClientDto);
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: number) {
    try {
      const client = await this.findClientById(id);
      return await this.clientRepository.delete(client.id);
    } catch (error) {
      this.handleError(error);
    }
  }

  async findClient(findClientDto : FindClientDto){
    if(Object.keys(findClientDto).length === 0)
      throw new BadRequestException('No criteria given')
    const {inn,series,name,number,dateOfBirth} = findClientDto;
    const clients = await this.clientRepository.find({where: {name, dateOfBirth, inn, series, number}});

    if(clients.length === 0)
      throw new NotFoundException('Clients not found');

    return clients;
  }

  async seedDataWithFaker(): Promise<void> {
    const clients: Partial<Client>[] = [];
    for (let i = 0; i < 10; i++) {
      const client = new Client();
      client.name = faker.person.fullName();
      client.dateOfBirth = faker.date.birthdate({
        min: 18,
        max: 80,
        mode: 'age',
      });
      client.phone = faker.phone.number();
      client.inn = faker.number.int({ min: 111111111111, max: 999999999999 });
      client.address = faker.location.streetAddress();
      client.series = faker.number.int({ min: 1111, max: 9999 });
      client.number = faker.number.int({ min: 111111, max: 999999 });
      client.comment = faker.lorem.sentence();
      clients.push(await this.clientRepository.save(client));
    }
  }
}
