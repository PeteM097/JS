const out = document.querySelector(".out");

const numbers = [-8, -6, -4, -2];

let sum = 0;
for(let n of numbers) sum += n;

console.log(sum);
out.innerHTML += sum + "<br>";


// a = -8, c = -6 => a = -14
// a = -14, c = -4 => a = -18
// a = -18, c = -2 => a = -20
const sum2 = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue);
console.log(sum2);
out.innerHTML += sum2;    