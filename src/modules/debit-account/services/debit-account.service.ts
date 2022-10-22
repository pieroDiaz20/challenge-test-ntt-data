import { Injectable } from '@nestjs/common';
import { DebidAccountPersistance } from './dto/debit-account-persistance.dto';

@Injectable()
export class DebitAccountService {
    constructor(private readonly debidAccountPersistance: DebidAccountPersistance) { }
    public async getTransactionsByDate(condition: string) {
        let resultBody = {};

        const data = await this.debidAccountPersistance.getBankTransactions();

        let imput = condition.toUpperCase().trim();
        if (imput === 'ASC') {
            let sortDatesAscending = data.sort((olderDate, minorDate) => {
                return olderDate.date.getTime() - minorDate.date.getTime();
            });
            resultBody = { StatusCode: 201, message: 'Dates sorted in ascending order', date: sortDatesAscending };
        } else if (imput === 'DESC') {
            let sortDateDescending = data.sort((olderDate, minorDate) => {
                return minorDate.date.getTime() - olderDate.date.getTime()
            });
            resultBody = { StatusCode: 200, message: 'Dates sorted in descending order', date: sortDateDescending };
        } else {
            resultBody = { StatusCode: 401, message: 'You must enter ASC or DESC' }
        }
        console.log(imput)
        return resultBody;
    }
}
