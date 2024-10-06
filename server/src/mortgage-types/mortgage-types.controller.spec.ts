import { Test, TestingModule } from '@nestjs/testing';
import { MortgageTypesController } from './mortgage-types.controller';
import { MortgageTypesService } from './mortgage-types.service';

describe('MortgageTypesController', () => {
  let controller: MortgageTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MortgageTypesController],
      providers: [MortgageTypesService],
    }).compile();

    controller = module.get<MortgageTypesController>(MortgageTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
