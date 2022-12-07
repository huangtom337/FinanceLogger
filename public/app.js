import { Invoice } from "./models/invoice.js";
import { Payment } from "./models/payment.js";
import { ListTemplate } from "./models/ListTemplate.js";
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
const anchorTag = document.querySelector('a'); // "!" forces possibility
// const form = document.querySelector('form')!
//DOM manipulation
//selects the class of the form instead of form. more specified
//type casting 'as' keyword
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
//generics
//<T> captures whatever property returns
//to specifiy <T> to only capture object do <T extends object>
//can say it extends a specific type of object as well to 
//include at least that property
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
//even tho it has extra property its fine cuz it has at least the
//specified properties in it
const exampleOne = addUid({ name: "tom", age: 40 });
const exampleTwo = {
    uid: 2,
    resourceName: "hello",
    data: "hello"
};
const exampleThree = {
    uid: 2,
    resourceName: "hello",
    data: { name: "tom" }
};
//enums
//stores a set of constant and associate them with a numeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["MUSIC"] = 4] = "MUSIC";
})(ResourceType || (ResourceType = {}));
//interface equivalent of type
// interface Resources<T> {
//     uid: number;
//     resourceName: ResourceType;
//     data: T  //we want to make this data dynamic (generic)
// }
const exampleFour = {
    uid: 4,
    resourceName: ResourceType.MUSIC,
    data: "Tom"
};
let arr = ['ryr', 25, true];
//fixed type for each position
let tup = ['tom', 25, true];
let tups = ['tom', 25, false];
//use type alias > interface lol
