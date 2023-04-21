const out = document.querySelector(".out");

function max(n1, n2){
    (n1 > n2) ? n1: n2;
}

let num1 = prompt("Enter a number.");
let num2 = prompt("Enter another number.");

out.innerHTML = max(num1, num2);