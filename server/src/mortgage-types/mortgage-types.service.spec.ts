import { Test, TestingModule } from '@nestjs/testing';
import { MortgageTypesService } from './mortgage-types.service';

describe('MortgageTypesService', () => {
  let service: MortgageTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MortgageTypesService],
    }).compile();

    service = module.get<MortgageTypesService>(MortgageTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
