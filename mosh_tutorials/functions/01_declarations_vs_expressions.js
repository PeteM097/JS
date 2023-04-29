const out = document.querySelector(".out");


// Function Declaration
function walk() {
    console.log("walk");
    out.innerHTML += "walk";
}

// Anonymous Function Expression
let run = function() {
    console.log("run");
    out.innerHTML += "run";
};

// Named Function Expression
let move = run;


walk();
out.innerHTML += "<br>";
run();
out.innerHTML += "<br>";
move();