
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

content.innerHTML = '<h3>This is a new h3</h3>';

const people = ['Marc', 'John', 'Shaun', 'Brad'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});


// Getting & Setting Attributes

const link = document.querySelector('a');

console.log(link.getAttribute('href'))

// Set a new attribute

link.setAttribute('href', 'https://www.google.com/maps/preview');
link.innerText = 'Google Maps';

const mssg = document.querySelector('.moreErrors');

console.log(mssg.getAttribute('class'));

mssg.setAttribute('class', 'now is success')

// Changing CSS Styles

const subtitle = document.querySelector('h2');

// subtitle.setAttribute('style', 'margin: 50px;')

// Adding extra styles

console.log(subtitle.style);

console.log(subtitle.style.color)

subtitle.style.margin = '50px';

subtitle.style.color = 'blue';

subtitle.style.fontSize = '80px';

title.style.margin = '';

subtitle.style.fontSize = '';

