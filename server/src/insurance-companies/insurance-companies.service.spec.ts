import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceCompaniesService } from './insurance-companies.service';

describe('InsuranceCompaniesService', () => {
  let service: InsuranceCompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsuranceCompaniesService],
    }).compile();

    service = module.get<InsuranceCompaniesService>(InsuranceCompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
