
//Fundamental concepts

//Variables: It gives as a way to store a value and then use it later on the file.
// A variable can hold any data type

//Let=> we can overwrite its value the times we want

let age = 25;
let year = 2020;

console.log(age, year);

//To rewrite it we do not need to declare the let anymore, just taking the variable and changing the value
age = 30;
console.log(age)

//Const=> it creates a constant when we do not want a value to be overwritten

const points = 100;
console.log(points)

//DATA TYPES

//Strings => store, letters, numbers or other characters

//Strings

console.log('hello world');

let email ="mario@thenetninja.co.uk";

console.log(email);

//String Concatenation => joining things together

let firstName = 'Brandon';

let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

//Getting characters => to get a single character in an specific position. JS is a zero-based language

console.log(fullName[0]);

//String length => to know how  many characters are in the string

console.log(fullName.length);

//String methods => is just a function associated with a particular object or data type

//To upper case => it turns the all letters of a string to uppercase

console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();

console.log(result);

let index = email.indexOf('@');

console.log(index);

//Function => a snip of code which performs some kind of specific task

//Common String Methods

let email2 = "mario@thenetninja.co.uk";

//It finds the last index of a particular character in the string

let result2 = email2.lastIndexOf('n');

console.log(result2);

//Slice => slice a section from the string

let result3 = email2.slice(0, 10);

console.log(result3);

let result4 = email.substr(4, 10);

console.log(result4);

let result5 = email.replace('m', 'w');

console.log(result5)

let result6 = email.replace('n', 'w');

console.log(result6)

//NUMBERS

let radius = 10;

const pi = 3.14;

console.log(radius, pi);

//Math operators +, -, *, /, **, %

console.log(10/2);

let result7 = radius % 3;

console.log(result7)

let result8 = pi * radius**2;

console.log(result8)

//Order of operation - B I D M A S => BRACKETS-INDICES-DIVISIONS-MULTIPLICATIONS-ADDITION-SUBTRACTION

let result9 = 5 * (10-3) **2;

console.log(result9)

// let likes = 10;

//JS way => SHORT HAND OPERATION/ NOTATION

// likes++;

// likes--;

// likes += 10  It takes the current value and add 10 to it 
// likes /= 2
// likes -= 5

// likes = likes + 1;

// console.log(likes);

//NaN - not a number, it does not make any sense

//Numbers concatenation

// let result10 = 'the blog has ' + likes + ' likes';

// console.log(result10)

//Template Strings/Literal

const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//Concatenation way

let result11 = 'The blog called ' + title + ' by ' + author + ' has '+ likes + ' likes';

console.log(result11)

//Template String way- we use dollar sign and instead of quotes backtracks 

let result12 = `The blog called ${title} by ${author} has ${likes} likes`
;

console.log(result12)

//Creating html templates

let html = `

    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>

`;

console.log(html)

//ARRAYS => Object datatype. To store collections of data that relate to each other, things in, collection of strings or numbers, etc.

//We can store different datatypes, strings or numbers

let ninjas1 = ['shaun', 'ryu', 'chun-li'];

//Overwritting a position

ninjas1[1] = 'ken';

console.log(ninjas1[2])

let ages = [20, 25,30,35];

console.log(ages[2])

// Not limited to store just one particular type of data in the same array

let random = ['shaun', 'crystal', 30, 25]

console.log(random);

//Properties and methods of arrays

let ninjas = ['shaun', 'ryu', 'chun-li'];

console.log(ninjas.length);

//Join method takes the array and join all elements inside into a single string

let result13 = ninjas.join(',');
console.log(result13);

let result14 = ninjas.indexOf('chun-li');

console.log(result14)

// .concat() it takes the array and concatenates another array in it

let result15 = ninjas.concat(['ken', 'crystal'])

console.log(result15)

//this method returns the length of the new array after pushing a new element in it
//it alters the original value, reason why is ts called  destructive method

let result16 = ninjas.push('ken');

console.log(result16);
console.log(ninjas);

//this methods takes away the last value. If we console log  result it shows the value already taken off

result16 = ninjas.pop();

console.log(ninjas);

//Null and Undefined

//Null is an intentional lack of value. It takes the value of 0.
//Undefined unintentional. The browser automaticaaly gives this value because we did not give one yet.

//Boleeans & Comparisons

// console.log(true, false);

//methods can return booleans
let email3 = 'luigi@thenetninja.co.uk'; 

let names = ['mario', 'luigi', 'toad'];

let result18 = email3.includes('luigi');

// let result17 = email.includes('@');

console.log(result18)

//comparison operators

let age2 = 25;

console.log(age2 == 25);
console.log(age2 == 30);
console.log(age2 != 30);
console.log(age2 > 20);
console.log(age2 < 20);
//Less than or equal to 25
console.log(age2 <= 25);
console.log(age2 >= 25);

let name = 'shaun'
//Abstract equality or loose equality: it means that values type is not considered when we are performing comparison
console.log(name == 'shaun')
console.log(name == 'Shaun')

//the s comes late in the alphabet than c. Later letters in the alphabet are greater that the early ones
console.log(name > 'crystal')
//lowercase letter is greater than an uppercase letter
console.log(name > 'Shaun')

console.log(name > 'Crystal')

//LOOSE COMPARISON VS. STRICT COMPARISON

//Loose comparison => different types can still be equal. In this case, it compares the string and converting it into a number before evaluating 
//Conversion

console.log(age2 == '25');
console.log(age2 != '25');
console.log(age2 !=  25);

//Strict comparison => different types cannot be equal
//Just taking into consideration the type and not doing conversion behind scenes

console.log(age2 === 25);
console.log(age2 === '25');
console.log(age2 !== 25);
console.log(age2 !== '25');

//Type conversion

//We want to add 1 to the value 100. We want to convert the string to the number to make the maths


let score = '100';

//It takes the string and changes it into a number

score = Number(score);

//Now converted into a number, we can sum 

console.log(score + 1)

//Checking a type

console.log(typeof score)

//Take a number and turn it intoa string

let result19 = String(50)

console.log(result19, typeof result19)

//Convert things into booleans

let result20 = Boolean(100)

// 0 is a falsy number. Positive numbers are considered a truthy values and minus numbers in type onversion, but 0 is falsy

//But if we pass 0 in a string, strings of any length are always considered truth, but if they are empty, are false




