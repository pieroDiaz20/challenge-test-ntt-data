import { Module } from '@nestjs/common';
import { DebitAccountController } from './controllers/debit-account.controller';
import { DebitAccountService } from './services/debit-account.service';

@Module({
  controllers: [DebitAccountController],
  providers: [DebitAccountService],
})
export class DebitAccountModule { }
