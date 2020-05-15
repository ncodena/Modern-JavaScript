// OBJECTS

// Objects literals

let user = {
    // key-value pair
    name: 'Crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'Berlin',
    blogs: ['why mac & cheese rules','10 things to make with marmite']
};

//Access through dot notation

console.log(user);
console.log(user.name);

//Access through square bracket notation

console.log(user['email']);

//Overwritting values

user.age = 35;

console.log(user.age)

user['name'] = 'chun-li'

console.log(user['name'])

// Show type of operator

console.log(typeof user);

//Adding methods

 //Objects in arrays

// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30 },
//     {title: '10 things to make with marmite', likes:50 }
// ];

// console.log(blogs)

let user1 = {
    // key-value pair
    name: 'Crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'Berlin',
    blogs: [
        {title: 'why mac & cheese rules', likes: 30 },
        {title: '10 things to make with marmite', likes:50 }
    ],
    //Objects in arrays

    login: function(){
        console.log('the user is logged in')
    },
    logout: function(){
        console.log('the user is logged out')
    },

    //this keyword-it is a context object. It represents the context in which the current code is executed
    logBlogs(){
        //this refers to the user object
        // console.log(this)
        // console.log(this.blogs)
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    },
};  

//methods are still functions but it is defined on an object

user1.logBlogs();
user1.login();
user1.logout();
const name = 'mario';
name.toUpperCase();


// in the floor, this is accessing the global contect and the global object in JS known as the window object

console.log(this)

//Math objects =>

console.log(Math)

console.log(Math.PI);
console.log(Math.E)

const area = 7.7;

console.log(Math.round(area));

//Floor => rounding down. it takes a number and floor it to the number below what they say

console.log(Math.floor(area));

//rounding

console.log(Math.round(area));

//rounding up/to the top

console.log(Math.ceil(area));

//taking away the decimal

console.log(Math.trunc(area));

// random number => it will always be from 0 to 1

const random = Math.random();

console.log(random);

// random number between 1 and 100

console.log(Math.round(random * 100));

//Primitipe types => stored in the stack. Limited space

//Reference types => all types of objects. Stored in the heap

//Stack => smaller but quicker.

//Heap: much bigger, it can store complex types like objects an arrays but it is slower too.



//The main difference is how they are stored and used in memory
