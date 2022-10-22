import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DebitAccountModule } from './modules/debit-account/debit-account.module';

@Module({
  imports: [DebitAccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
