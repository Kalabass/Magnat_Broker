import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BanksModule } from 'src/banks/banks.module';
import { BanksService } from 'src/banks/banks.service';
import { Bank } from 'src/banks/entities/bank.entity';
import { InsuranceObjectType } from 'src/insurance-object-types/entities/insurance-object-type.entity';
import { InsuranceObjectTypesModule } from 'src/insurance-object-types/insurance-object-types.module';
import { InsuranceObjectTypesService } from 'src/insurance-object-types/insurance-object-types.service';
import { InsuranceObject } from './entities/insurance-object.entity';
import { InsuranceObjectsController } from './insurance-objects.controller';
import { InsuranceObjectsService } from './insurance-objects.service';

@Module({
  imports: [
    BanksModule,
    InsuranceObjectTypesModule,
    TypeOrmModule.forFeature([InsuranceObject, Bank, InsuranceObjectType]),
  ],
  controllers: [InsuranceObjectsController],
  providers: [
    InsuranceObjectsService,
    BanksService,
    InsuranceObjectTypesService,
  ],
})
export class InsuranceObjectsModule {}
