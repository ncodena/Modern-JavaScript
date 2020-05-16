
// Grabbing one element 

const para = document.querySelector('body > h1');

console.log(para)

// Grabbing multiple elements

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(para)
})

console.log(paras)