const out = document.querySelector(".out");

function start() {
    for(var i = 0; i < 5; i++) 
        if (true) {
            // var colour = "turquoise";
            let colour = "turquoise"
        }
    console.log(colour); // only ok w/ var version of colour
}

start();

// When a variable is declared with var, its scope is NOT limited
// to the code block in which it's defined.

// Keywords let and const were introduced in ES6 (ES2015) - 
// before that var was the only way to declare new variables.

// let and const create block-scoped variables, whilst var 
// creates function-scoped variables.

var height = "tall"; 
// Using var outside of a function creates a global variable
// and attaches that variable to the window object.

// This is bad practice because if, say, a 3rd party library 
// you're using has a variable of the same name, that one will
// override your global one.
let age = 45; // global variable that's NOT attached to window