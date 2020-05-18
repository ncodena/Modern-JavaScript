
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
