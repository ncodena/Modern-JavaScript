
// Grabbing one element 

const para = document.querySelector('body > h1');

console.log(para)

// Grabbing multiple elements

const paras = document.querySelectorAll('p');

const groupErrors = document.querySelectorAll('.error');


paras.forEach(para => {
    console.log(para)
})

console.log(paras)

// Get an element by ID 

const title = document.getElementById('page-title');

// Get elements by their class name

const errors = document.getElementsByClassName('error');

// Get elements by their tag name

const paragraphs = document.getElementsByTagName('p');


