
// Grabbing one element 

const para = document.querySelector('body > h1');

console.log(para)

// Grabbing multiple elements

const paras = document.querySelectorAll('p');

const groupErrors = document.querySelectorAll('.error');


paras.forEach(para => {
    console.log(para)
})

// Get an element by ID 

const title = document.getElementById('page-title');

// Get elements by their class name

const errors = document.getElementsByClassName('error');

// Get elements by their tag name

const paragraphs = document.getElementsByTagName('p');

// Adding & Changing Page content

const pTag = document.querySelector('p');

// innerText is a property that gets the inner text of an element

// By using = we get rid of the previous text and it is overwritten

pTag.innerText = 'I am changing the text';

// In case we just want to append to the previous, we use +=

pTag.innerText += 'I am changing the text';

// Updating the content of multiple elements

const moreParas = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += 'adding more text'
})

// Updating the template by using innerHTML

const content = document.querySelector('.content');

content.innerHTML = '<h2>This is a new h2</h2>';

const people = ['Marc', 'John', 'Shaun', 'Brad'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});


// Getting & Setting Attributes