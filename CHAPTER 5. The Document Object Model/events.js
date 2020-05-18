
// Parents, Children & Siblings

const article = document.querySelector('article');

console.log(article.children)

// Turning an HTML Collection into an array, Array.from does not alter the original value, so it is not destructive

// console.log(Array.from(article.children))

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// })

const title = document.querySelector('h2');

console.log(title.parentElement)

console.log(title.parentElement.parentElement)

console.log(title.nextElementSibling)

console.log(title.previousElementSibling)

// chaining

console.log(title.nextElementSibling.parentElement.children);

// Click events
const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // append the item at the bottom of the parent
    // ul.append(li)
    // append the item at the top
    ul.prepend(li)
    
});


// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         // console.log(e);
//         // console.log(e.target);
//         // console.log(item);
//         // e.target.style.textDecoration = 'line-through';
//         console.log('event in LI')
//         e.stopPropagation();
//         e.target.remove();
        

//     })
// });

// Event bubbling => the event starts at the event target, then it bubbles up to parents to see if there is any event listeners attached to those to those too. If there is, it is going to fire the callback function for those event listeners as well

ul.addEventListener('click', e => {
    // console.log(e.target);
    if(event.target.tagName === 'LI'){
        e.target.remove();
    }

})

// More DOM Events

// Copy event

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('copied')
})

// Mouse move event

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
// console.log(e.offsetX, e.offsetY)
box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY} `
});

document.addEventListener('wheel', (e) => {
    console.log(e.pageX, e.pageY)
})