const out = document.querySelector(".out");

const numbers = [-2, -1, 0, 1, 2];

const positives = numbers.filter(n => n >= 0);

console.log(positives);
out.innerHTML += `[${positives}]`;