import { Test, TestingModule } from '@nestjs/testing';
import { BlanksService } from './blanks.service';

describe('BlanksService', () => {
  let service: BlanksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlanksService],
    }).compile();

    service = module.get<BlanksService>(BlanksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
