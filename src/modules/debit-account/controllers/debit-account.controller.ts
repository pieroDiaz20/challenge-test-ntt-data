import { Controller, Get, Param } from '@nestjs/common';
import { DebitAccountService } from '../services/debit-account.service';

@Controller('debit-account')
export class DebitAccountController {
    constructor(private readonly debitAccountService: DebitAccountService) { }
    @Get('/bankTransactionsByDateOrder/:ordenAscOrDesc')
    public async getTransactionsByDate(@Param() queryPamans) {
        const { ordenAscOrDesc } = queryPamans;
        return await this.debitAccountService.getTransactionsByDate(ordenAscOrDesc);
    }

}
