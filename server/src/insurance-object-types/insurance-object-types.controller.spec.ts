import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceObjectTypesController } from './insurance-object-types.controller';
import { InsuranceObjectTypesService } from './insurance-object-types.service';

describe('InsuranceObjectTypesController', () => {
  let controller: InsuranceObjectTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsuranceObjectTypesController],
      providers: [InsuranceObjectTypesService],
    }).compile();

    controller = module.get<InsuranceObjectTypesController>(InsuranceObjectTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
