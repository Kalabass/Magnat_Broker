import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsuranceType } from './entities/insurance-type.entity';
import { InsuranceTypesController } from './insurance-types.controller';
import { InsuranceTypesService } from './insurance-types.service';

@Module({
  imports: [TypeOrmModule.forFeature([InsuranceType])],
  controllers: [InsuranceTypesController],
  providers: [InsuranceTypesService],
})
export class InsuranceTypesModule {}
