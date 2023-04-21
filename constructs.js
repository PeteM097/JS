const out = document.querySelector(".out");
let name = prompt("What is your name?");
if (name === "pete") {
    out.innerHTML = "You're getting there!";
} else if (name != "pete") {
    out.innerHTML = "Nevermind.";
} else {
    out.innerHTML = "Haha!";
}
name === "Chris" ? out.innerHTML += " Good luck!" :  out.innerHTML += " Nevermind."; 

for(x=0; x<10; x++){
    out.innerHTML += "\nLlama";
}

while(name != "pete") {
    name = prompt("What is the password?");
}

let num1 = parseInt(prompt("Enter a number"));
let num2 = parseInt(prompt("Enter another number"));

out.innerHTML += num1 + num2;