const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    console.log(input)
})

let object = {
    one: 1,
    two: 2,
    three: 3
}

let objectTwo = {...object, four:4}


let mixed: (string|number[])[] = []

mixed.push([123])

let objectThree: {
    age: number,
    title: string
}

//dynamic type
let age: any = 25
let objectFour: {name: string, age: number}

//default and optional parameter
//default is 10 and its optional
//can also denote optional with ?:
const add = (a: number, b: number, c: number | string = 10): number => {
    console.log(a+b)
    //ts also automatically infer return type
    return a + b
}

//variable is inferred as the return value of function
let result = add(10,5)

//type aliases
type StringOrNum = string | number
type objWithName = { name: string, uid: StringOrNum }

const minus = (a: number, b: number, c: StringOrNum = 10): number => {
    console.log(a+b)

    return a - b
}

const greet = (user: objWithName) => {
    console.log(user.name)
}

//function signature
let tom: (a: string, b: string) => void;

tom = (name: string, race: string) => {
    console.log(`${name}`)
}

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo
    }

    return 0
}

type person = {name: string, age: number}
let logDetails: (obj: person) => void;

logDetails = (tom: person) => {
    console.log(`${tom.name}`)
}