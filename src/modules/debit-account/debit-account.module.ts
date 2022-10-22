import { Module } from '@nestjs/common';
import { DebitAccountController } from './controllers/debit-account.controller';
import { DebitAccountService } from './services/debit-account.service';
import { DebidAccountPersistance } from './services/dto/debit-account-persistance.dto';

@Module({
  controllers: [DebitAccountController],
  providers: [DebitAccountService, DebidAccountPersistance],
})
export class DebitAccountModule { }
