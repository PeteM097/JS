const out = document.querySelector(".out");

let a = "red";
let b = "blue";
let c;

out.innerHTML = a + "<br>" + b + "<br><br>";

c = a;
a = b;
b = c;

out.innerHTML += a + "<br>" + b;
