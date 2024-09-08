import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceObjectTypesService } from './insurance-object-types.service';

describe('InsuranceObjectTypesService', () => {
  let service: InsuranceObjectTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsuranceObjectTypesService],
    }).compile();

    service = module.get<InsuranceObjectTypesService>(InsuranceObjectTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
