import { Test, TestingModule } from '@nestjs/testing';
import { AvaliationController } from './avaliation.controller';
import { AvaliationService } from './avaliation.service';

describe('AvaliationController', () => {
  let controller: AvaliationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaliationController],
      providers: [AvaliationService],
    }).compile();

    controller = module.get<AvaliationController>(AvaliationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
