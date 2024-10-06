import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceTypesService } from './insurance-types.service';

describe('InsuranceTypesService', () => {
  let service: InsuranceTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsuranceTypesService],
    }).compile();

    service = module.get<InsuranceTypesService>(InsuranceTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
