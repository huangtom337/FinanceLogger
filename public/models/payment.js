export class Payment {
    // readonly client: string //can only read inside or outside the class
    // private details: string //can only write/change inside the class
    // public amount: number //can write/read inside or outside the class
    // constructor(c: string, d: string, a: number) {
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }
    //constructor shorthand, need access modifiers to use
    constructor(recepient, details, amount) {
        this.recepient = recepient;
        this.details = details;
        this.amount = amount;
        this.format = () => {
            return `${this.recepient} is owed $${this.amount} for ${this.details}`;
        };
    }
}
