import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceCompaniesController } from './insurance-companies.controller';
import { InsuranceCompaniesService } from './insurance-companies.service';

describe('InsuranceCompaniesController', () => {
  let controller: InsuranceCompaniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsuranceCompaniesController],
      providers: [InsuranceCompaniesService],
    }).compile();

    controller = module.get<InsuranceCompaniesController>(InsuranceCompaniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
