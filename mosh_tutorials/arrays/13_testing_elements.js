const out = document.querySelector(".out");

const numbers = [11, 22, 33, 44, 55, 66];
const allPositive = numbers.every(function(value) { 
    return value >= 0 
});

const numbers2 = [-11, 22, -33, 44, -55, 66];
const somePositive = numbers2.some(function(value) {
    return value >= 0;
});

console.log(allPositive);
console.log(somePositive);
out.innerHTML += allPositive + "<br>";
out.innerHTML += somePositive;