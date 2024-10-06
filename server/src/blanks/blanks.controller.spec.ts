import { Test, TestingModule } from '@nestjs/testing';
import { BlanksController } from './blanks.controller';
import { BlanksService } from './blanks.service';

describe('BlanksController', () => {
  let controller: BlanksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlanksController],
      providers: [BlanksService],
    }).compile();

    controller = module.get<BlanksController>(BlanksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
