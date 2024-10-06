import { Test, TestingModule } from '@nestjs/testing';
import { InsuranceObjectsController } from './insurance-objects.controller';
import { InsuranceObjectsService } from './insurance-objects.service';

describe('InsuranceObjectsController', () => {
  let controller: InsuranceObjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsuranceObjectsController],
      providers: [InsuranceObjectsService],
    }).compile();

    controller = module.get<InsuranceObjectsController>(InsuranceObjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
