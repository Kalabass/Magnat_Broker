import { Test, TestingModule } from '@nestjs/testing';
import { BlankSeriesService } from './blank-series.service';

describe('BlankSeriesService', () => {
  let service: BlankSeriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlankSeriesService],
    }).compile();

    service = module.get<BlankSeriesService>(BlankSeriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
