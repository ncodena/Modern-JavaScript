// What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?

// const bar = null;
// console.log(typeof bar === "object"); 

// console.log((bar !== null) && (typeof bar === "object"));

// console.log(Array.isArray(bar));

// const a = b = 3;

// console.log(a, b)

// What will the code below output to the console and why?

//     var a = b = 3;
  
//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));



// var myObject = {
//     foo: "bar",
//     func: function() {
//         const self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };

// myObject.func();


// The "use strict" directive was new in ECMAScript version 5.

// It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

// With strict mode, you can not, for example, use undeclared variables.

// Why Strict Mode?

// Strict mode makes it easier to write "secure" JavaScript.

// Strict mode changes previously accepted "bad syntax" into real errors.

// As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

// In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

const now = new Date();

console.log(typeof now)

console.log('Get full year', now.getFullYear());
console.log('Get Month', now.getMonth());
console.log('Get date', now.getDate());
console.log('Get day', now.getDay());
console.log('Get Minutes', now.getMinutes());
console.log('Get Seconds', now.getSeconds());

// date strings

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

let currentDate = now.toTimeString();

const splice = currentDate.split(' ').splice(0, 1);

console.log(splice)