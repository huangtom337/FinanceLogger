"use strict";
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(input);
});
let object = {
    one: 1,
    two: 2,
    three: 3
};
let objectTwo = Object.assign(Object.assign({}, object), { four: 4 });
let mixed = [];
mixed.push([123]);
let objectThree;
//dynamic type
let age = 25;
let objectFour;
//default and optional parameter
//default is 10 and its optional
//can also denote optional with ?:
const add = (a, b, c = 10) => {
    console.log(a + b);
    //ts also automatically infer return type
    return a + b;
};
//variable is inferred as the return value of function
let result = add(10, 5);
const minus = (a, b, c = 10) => {
    console.log(a + b);
    return a - b;
};
const greet = (user) => {
    console.log(user.name);
};
//function signature
let tom;
tom = (name, race) => {
    console.log(`${name}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    return 0;
};
let logDetails;
logDetails = (tom) => {
    console.log(`${tom.name}`);
};
