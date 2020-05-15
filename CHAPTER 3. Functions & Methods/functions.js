// FUNCTIONS

//They allow us to define a block of code which we can call and execute whenever we want.
//Creating little blocks of code that become reusable.

//vs. A method i just a function which does something

// Hoisting => how functions are effectively hoisted to the top o f a file before the rest of js runs
//Just working with function declrations

//Function declaration 

function greet(){
    console.log('hello there')

}

//Function expression=> we store a function inside a variable and set it equal to something whether it is a function or a string
// at the end of expressions we should always have ;
const speak = function(){
    console.log('bad day')

};
// calling the function

greet();

speak()

// Arguments and parameters => passing values into functions

//Parameter
//by passing the value it creates a local variable called name that can be used inside this code block
const talk = function(name, time){
    console.log(`good ${time} ${name}`)

};


//Argument
//when we call the function, we pass the value of mario, which is assigned to the local variable in the function

talk('mario', 'morning');

//Default values

const salute = function(name = 'luigi', time = 'night'){
    console.log(`good ${time} ${name}`)

};

salute();

//Returning values

// const calCArea = function(radius){
//     return 3.14 * radius**2;
     
// }

// store the value in some kind of variable

// const area = calCArea(5);

// console.log(area);

// we are able to reuse a value that a function returned to us

// const calcVol = function (area){

// };

// calcVol(area)

// console.log(area)

// Arrow functions

// const calCArea = (radius) => {
//     return 3.14 * radius**2;
// }

// const area = calCArea(5);

// console.log('area is ', area);

//When we only have a single return, we can only use one line without the return keyword
const calCArea = (radius) => 3.14 * radius**2;

const area2 = calCArea(8);

console.log('area is ', area2);

//Practise

const great = () => 'hello world';

const result= great();

console.log(result)

let amount = [10, 15, 30]

let imp = [0.2]

const bill = (products, tax) =>{
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

const result2 = bill(amount, imp)

console.log(result2)

// or

console.log(bill([15,30,20], 0.2))

//Functions vs Methods
//Main difference is the we invoke/ call them and how we defined them

// They can be invoked to do simething to us

//Functions

//We invoked them by saying the function name and the parenthesis
//Function defined on its own

const meet = () => 'hello';

const result3 = meet();

console.log(result3)

//Methods 
//Invoked by dot notation on the back of something
//Functions associated with an object or data type like a string

const name = 'nuria'

let result4 = name.toUpperCase();
console.log(result4)

// Foreach Methods and Callbacks

// Callback function => passing a function as an argument

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

// When we call it we pass a function as an argument

// myFunc(function(value){
//     console.log(value);
// });

myFunc(value => {
    console.log(value)
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, patata) => {
    console.log(`${patata} - hello ${person}`)
}

// Foreach => a method that iterates over an array-loop

people.forEach(logPerson);

// people.forEach((person, index) => {
//     console.log(index,person)
// });

//Callback functions in action

const ul = document.querySelector('.people');

let people2 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];