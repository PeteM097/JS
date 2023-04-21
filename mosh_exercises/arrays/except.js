const out = document.querySelector(".out");

const numbers= [1, 2, 3, 4, 1, 1];

function except(array, excluded) {
    return array
    .filter(value => !excluded.includes(value));
}

console.log(except(numbers, [1]));
out.innerHTML += except(numbers, [1]);