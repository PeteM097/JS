const out = document.querySelector(".out");

const numbers = [2, 4, 6, 8];

function includes(array, searchElement){
    return array.some(value => value === searchElement);
}

console.log(includes(numbers, 6));
out.innerHTML += includes(numbers, 6) + "<br>";
console.log(includes(numbers, 7));
out.innerHTML += includes(numbers, 7);