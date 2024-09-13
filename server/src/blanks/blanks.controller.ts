import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';
import { InsuranceObjectsService } from 'src/insurance-objects/insurance-objects.service';
import { EntityManager, Transaction } from 'typeorm';
import { BlanksService } from './blanks.service';
import { CreateBlankDto } from './dto/create-blank.dto';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateBlankDto } from './dto/update-blank.dto';

@Controller('blanks')
export class BlanksController {
  constructor(
    private readonly blanksService: BlanksService,
    private readonly clientService: ClientsService,
    private readonly insuranceObjectService: InsuranceObjectsService,
  ) {}

  @Post()
  async create(@Body() createBlankDto: CreateBlankDto) {
    return this.blanksService.create(createBlankDto);
  }

  @Post('createContract')
  @Transaction()
  async createContract(
    @Body() createContractDto: CreateContractDto,
    @TransactionManager() manager: EntityManager,
  ) {
    const { client, insuranceObject, blank } = createContractDto;

    try {
      // Открываем транзакцию
      const createdClient = await manager.save(
        this.clientService.createEntity(client),
      );

      const createdInsuranceObject = await manager.save(
        this.insuranceObjectService.createEntity(insuranceObject),
      );

      // Создаем новый бланк с уже установленными клиентом и объектом страхования
      const newBlank = this.blanksService.createEntity({
        ...blank,
        client: createdClient,
        insuranceObject: createdInsuranceObject,
      });

      const createdBlank = await manager.save(newBlank);

      if (!createdBlank) {
        throw new BadRequestException('Не удалось создать бланк');
      }

      return createdBlank;
    } catch (error) {
      console.error('Ошибка при создании контракта:', error);
      throw new InternalServerErrorException('Не удалось создать контракт');
    }
  }

  @Get()
  findAll() {
    return this.blanksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blanksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlankDto: UpdateBlankDto) {
    return this.blanksService.update(+id, updateBlankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blanksService.remove(+id);
  }

  @Get('seed/faker')
  async seedDataWithFaker(): Promise<string> {
    await this.blanksService.seedDataWithFaker();
    return 'blank table seeded successfully!';
  }
}
