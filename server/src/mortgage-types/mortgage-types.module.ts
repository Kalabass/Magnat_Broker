import { Module } from '@nestjs/common';
import { MortgageTypesService } from './mortgage-types.service';
import { MortgageTypesController } from './mortgage-types.controller';

@Module({
  controllers: [MortgageTypesController],
  providers: [MortgageTypesService],
})
export class MortgageTypesModule {}
