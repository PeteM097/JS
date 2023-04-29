const out = document.querySelector(".out");

// Functions defined using declaration can be called BEFORE
// it is defined:
walk();
function walk() {
    console.log("walk");
    out.innerHTML += "walk";
}

// This cannot be done with functions defined using declaration.
run(); // throws error in console
let run = function() {
    console.log("run");
    out.innerHTML += "run";
}; 

// When the javascript engine executes code, it moves all
// function declarations to the top. This is called hoisting.