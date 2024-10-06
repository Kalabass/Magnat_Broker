import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceTypesController } from './insurance-types.controller';
import { InsuranceTypesService } from './insurance-types.service';

describe('InsuranceTypesController', () => {
  let controller: InsuranceTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsuranceTypesController],
      providers: [InsuranceTypesService],
    }).compile();

    controller = module.get<InsuranceTypesController>(InsuranceTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
