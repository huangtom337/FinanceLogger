export class Invoice {
    // readonly client: string //can only read inside or outside the class
    // private details: string //can only write/change inside the class
    // public amount: number //can write/read inside or outside the class
    // constructor(c: string, d: string, a: number) {
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }
    //constructor shorthand, need access modifiers to use
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.format = () => {
            return `${this.client} owes $${this.amount} for ${this.details}`;
        };
    }
}
