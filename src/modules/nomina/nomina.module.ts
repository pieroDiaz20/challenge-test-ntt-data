import { Module } from '@nestjs/common';
import { NominaController } from './controllers/nomina.controller';
import { NominaService } from './services/nomina.service';

@Module({
    controllers: [NominaController],
    providers: [NominaService],
})
export class NominaModule { }
