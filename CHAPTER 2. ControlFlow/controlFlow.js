//For Loops

//The job of a loop is to loop through a portion of code over and over

//Initialization => let i = 0
//Condition i<5
//Final expression to increment i each time around i++

for (let i = 0; i < 5; i++){
    // Code block => a section of code between curly braces that we are kind of sectioning off for this loop 
    console.log('in loop', i)
}

console.log('loop finished');

//Iteration => cycling through an array. Each iteration is one cycle through

const names = ['shaun', 'mario', 'luigi']

for (let i = 0; i < names.length; i++){
    // console.log(names[i])
    let html = `<div>${names[i]}</div>`;
    console.log(html) 
}

//While loop

let j = 0;


while(j < 5){
    console.log('in loop', j)
    j++;

}

let h = 0;

while( h < names.length){
    console.log(names[h])
    h++;
}

//If statements

const age = 25;

if(age > 20){
    console.log('you are 20 years')
}

const ninjas = ['shaun', 'ryuy', 'ken', 'yoshi']

if(ninjas.length > 3){
    console.log("that's a lot of ninjas")
}

const password = 'p@ss123456';

// if(password.length >= 12){
//     console.log('that password is might strong')
// }else if(password.length >= 8){
//     console.log('that password is long enough');
// }else {
//     console.log('password is not long enough')
// }

//LOGICAL OPERATORS -OR || AND &&

// With && both statements must be true to be fired
//With || with just one condition being true, it is fired

//We use them when we want to satisfy a combination of different conditions inside the same check

if(password.length >= 12 && password.includes('@')){
    console.log('that password is might strong')
}else if(password.length >= 8 || password.includes('@') && password.lenght >= 2){
    console.log('that password is strong enough');
}else {
    console.log('password is not strong enough')
}

//Logical NOT (!) It reverses a boleean

let user = false;

if(!user){
    console.log('you must be logged to continue')
}

//Break and continue

//Break breaks out of the loop

//Continue jumps out of that one particular loop that one iteration goes back to the top and continue with the next iteration

const scores = [50, 25, 0, 30, 100, 20, 10];

for(let l = 0; l < scores.length; l++){

    if(scores[l] === 0){
        continue;
    }

    console.log('your score:', scores[l]);

    if(scores[l] === 100){
        console.log('congrats, you got top score')
        break;
    }

}

//Switch statements => checking multiple possible values of a single variable

// Strict equality ===

const grade = 'Y';

switch(grade){
    case 'A':
        console.log('you got an A');
        break;
    case 'B':
        console.log('you got an B');
        break;
    case 'C':
        console.log('you got an C');
        break;
    case 'D':
        console.log('you got an D');
        break;
    case 'E':
        console.log('you got an E');
        break;
    default:
        console.log('not valid grade')
}

//Using if statements

if(grade === 'A'){

}else if(grade === 'B'){

}else if(grade === 'C'){
    
}else if(grade === 'D'){
    
}else if(grade === 'E'){
    
}else {

}

//Variables & Block Scope

//Block level scope with variables



let age2 = 30;


//the variable age has global scope

if(true){
    //this variable is creating a local scope for itself inside this code block
    //it cannot be accessed outside this code block
    let age2 = 40;
    let name = 'shaun';
    console.log('inside 1st code block: ', age2, name)

    //Nested code blocks

    if(true){
        let age2 = 50;
        //it takes the most recently defined value
        console.log('inside 2nd code block', age2)
    }

}

console.log('outside code block: ', age2, name)