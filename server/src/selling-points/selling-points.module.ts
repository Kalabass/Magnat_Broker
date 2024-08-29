import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellingPoint } from './entities/selling-point.entity';
import { SellingPointsController } from './selling-points.controller';
import { SellingPointsService } from './selling-points.service';

@Module({
  imports: [TypeOrmModule.forFeature([SellingPoint])],
  controllers: [SellingPointsController],
  providers: [SellingPointsService],
})
export class SellingPointsModule {}
