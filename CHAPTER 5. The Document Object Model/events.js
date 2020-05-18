
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


const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target);
        // console.log(item);
        // e.target.style.textDecoration = 'line-through';
        e.target.remove();

    })
})




