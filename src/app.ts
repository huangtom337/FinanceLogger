import { Invoice } from "./models/invoice.js"
import { Payment } from "./models/payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"
import { ListTemplate } from "./models/ListTemplate.js"
//!interfaces
// interface IsPerson {
//     name: string
//     age: number
    
//     speak(n: string): void;
//     spend(s: number): number;
// }

// const Tom: IsPerson = {
//     name: "Tom",
//     age: 30, 
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         return amount
//     }
// }
// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('mario', 'work on website', 300)
// docTwo = new Payment('Tom', 'work on website', 400)

// let docs: HasFormatter[] = []
// //we are ensuring that everything in this array has the
// //HasFormatter properties
// docs = [...docs, docOne, docTwo]








const anchorTag = document.querySelector('a')! // "!" forces possibility

// const form = document.querySelector('form')!


//DOM manipulation
//selects the class of the form instead of form. more specified
//type casting 'as' keyword
const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)


form.addEventListener('submit', (e) => {
    e.preventDefault()

    //using tuples and type alias
    type userInput = [string, string, number]
    let values: userInput = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')
})


//generics

//<T> captures whatever property returns
//to specifiy <T> to only capture object do <T extends object>
//can say it extends a specific type of object as well to 
//include at least that property
const addUid = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

//even tho it has extra property its fine cuz it has at least the
//specified properties in it
const exampleOne = addUid({name: "tom", age: 40})


//with interfaces

interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T  //we want to make this data dynamic (generic)
}

const exampleTwo: Resource<string> = {
    uid: 2,
    resourceName: "hello",
    data: "hello"
}

const exampleThree: Resource<object> = {
    uid: 2,
    resourceName: "hello",
    data: {name: "tom"}
}

//enums
//stores a set of constant and associate them with a numeric value
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, MUSIC }

type Resources<T> = {
    uid: number;
    resourceName: ResourceType;
    data: T  //we want to make this data dynamic (generic)
}

//interface equivalent of type
// interface Resources<T> {
//     uid: number;
//     resourceName: ResourceType;
//     data: T  //we want to make this data dynamic (generic)
// }

const exampleFour: Resources<string> = {
    uid: 4,
    resourceName: ResourceType.MUSIC, //this would evaluate to 4, the index of MUSIC
    data: "Tom"
}

// tuples

//type alias for an array
type test = string | number | boolean 
type testArr = test[]

let arr: testArr = ['ryr', 25, true]

//fixed type for each position
let tup: [string, number, boolean] = ['tom', 25, true]
//cant do this
// tup[0] = 25

//type alias for a tuple
type student = [string, number, boolean]

let tups: student = ['tom', 25, false]

//use type alias > interface lol
