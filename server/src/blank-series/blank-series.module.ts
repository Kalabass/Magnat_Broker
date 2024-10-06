import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlankSeriesController } from './blank-series.controller';
import { BlankSeriesService } from './blank-series.service';
import { BlankSeries } from './entities/blank-series.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlankSeries])],
  controllers: [BlankSeriesController],
  providers: [BlankSeriesService],
})
export class BlankSeriesModule {}
