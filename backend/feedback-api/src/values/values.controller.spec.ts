import { Test, TestingModule } from '@nestjs/testing';
import { ValuesController } from './values.controller';
import { ValuesService } from './values.service';

describe('ValuesController', () => {
  let controller: ValuesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValuesController],
      providers: [ValuesService],
    }).compile();

    controller = module.get<ValuesController>(ValuesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
