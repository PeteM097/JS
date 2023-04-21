const out = document.querySelector(".out");

let first_name = prompt("Enter your first name.");
let last_name = prompt("Enter your last name.");

function greet(fn, ln){
    out.innerHTML = "Hello " + fn + " " + ln + "!";
}

greet(first_name, last_name);