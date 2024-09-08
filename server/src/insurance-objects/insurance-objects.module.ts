import { Module } from '@nestjs/common';
import { InsuranceObjectsService } from './insurance-objects.service';
import { InsuranceObjectsController } from './insurance-objects.controller';

@Module({
  controllers: [InsuranceObjectsController],
  providers: [InsuranceObjectsService],
})
export class InsuranceObjectsModule {}
