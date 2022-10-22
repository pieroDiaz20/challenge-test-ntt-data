import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NominaModule } from './modules/nomina/nomina.module';
import { Controller } from './nomina/modules/nomina/.controller';

@Module({
  imports: [NominaModule],
  controllers: [AppController, Controller],
  providers: [AppService],
})
export class AppModule { }
