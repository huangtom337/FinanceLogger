import { HasFormatter } from "../interfaces/HasFormatter"

export class Invoice implements HasFormatter{
    // readonly client: string //can only read inside or outside the class
    // private details: string //can only write/change inside the class
    // public amount: number //can write/read inside or outside the class

    // constructor(c: string, d: string, a: number) {
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }

    //constructor shorthand, need access modifiers to use
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}


    format = () => {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}