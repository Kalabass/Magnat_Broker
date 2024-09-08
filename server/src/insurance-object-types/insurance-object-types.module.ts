import { Module } from '@nestjs/common';
import { InsuranceObjectTypesService } from './insurance-object-types.service';
import { InsuranceObjectTypesController } from './insurance-object-types.controller';

@Module({
  controllers: [InsuranceObjectTypesController],
  providers: [InsuranceObjectTypesService],
})
export class InsuranceObjectTypesModule {}
