import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceObjectsService } from './insurance-objects.service';

describe('InsuranceObjectsService', () => {
  let service: InsuranceObjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsuranceObjectsService],
    }).compile();

    service = module.get<InsuranceObjectsService>(InsuranceObjectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
