import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsuranceObjectType } from './entities/insurance-object-type.entity';
import { InsuranceObjectTypesController } from './insurance-object-types.controller';
import { InsuranceObjectTypesService } from './insurance-object-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([InsuranceObjectType])],
  controllers: [InsuranceObjectTypesController],
  providers: [InsuranceObjectTypesService],
})
export class InsuranceObjectTypesModule {}
