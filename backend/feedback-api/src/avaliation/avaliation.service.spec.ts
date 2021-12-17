import { Test, TestingModule } from '@nestjs/testing';
import { AvaliationService } from './avaliation.service';

describe('AvaliationService', () => {
  let service: AvaliationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvaliationService],
    }).compile();

    service = module.get<AvaliationService>(AvaliationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
