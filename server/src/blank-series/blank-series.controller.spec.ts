import { Test, TestingModule } from '@nestjs/testing';
import { BlankSeriesController } from './blank-series.controller';
import { BlankSeriesService } from './blank-series.service';

describe('BlankSeriesController', () => {
  let controller: BlankSeriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlankSeriesController],
      providers: [BlankSeriesService],
    }).compile();

    controller = module.get<BlankSeriesController>(BlankSeriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
