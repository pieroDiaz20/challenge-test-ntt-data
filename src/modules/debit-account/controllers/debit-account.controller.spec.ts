import { Test, TestingModule } from '@nestjs/testing';
import { DebitAccountController } from './debit-account.controller';

describe('DebitAccountController', () => {
  let controller: DebitAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DebitAccountController],
    }).compile();

    controller = module.get<DebitAccountController>(DebitAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
