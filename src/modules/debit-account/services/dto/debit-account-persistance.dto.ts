import { BankTransactions } from "../../interfaces/bank-transactions.interface";

export class DebidAccountPersistance {
    constructor() { }
    async getBankTransactions() {
        try {

            const dates: BankTransactions[] = [
                { date: new Date("2018-02-13"), oldBalance: 1225 },
                { date: new Date("2020-04-16"), newBalance: undefined },
                { date: new Date("2013-05-10"), oldBalance: null },
                { date: new Date("2012-01-20"), newBalance: 1205 }
            ]
            return dates;
        } catch (error) {
            console.log(error.message);
            throw new Error('Could not connect to the database');
        }
    }
}