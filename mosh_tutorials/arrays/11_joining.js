const out = document.querySelector(".out");

const numbers = [30, 60, 90, 120, 150, 180, 210, 240];
const joined = numbers.join("_");
console.log(joined);
out.innerHTML += joined + "<br>";

const message = "This is my first message.";
const parts = message.split(" ");
console.log(parts);
out.innerHTML += parts + "<br>";
const combined = parts.join("-");
console.log(combined);
out.innerHTML += combined;