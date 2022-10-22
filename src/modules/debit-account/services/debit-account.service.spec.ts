import { Test, TestingModule } from '@nestjs/testing';
import { DebitAccountService } from './debit-account.service';

describe('DebitAccountService', () => {
  let service: DebitAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DebitAccountService],
    }).compile();

    service = module.get<DebitAccountService>(DebitAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
