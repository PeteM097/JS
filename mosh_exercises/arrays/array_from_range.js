const out = document.querySelector(".out");

function arrayFromRange(min, max) {
    let array = [];
    for(let i = min; i <= max; i++) { array.push(i); }
    return array;
}

const numbers = arrayFromRange(-5, 5);
console.log(numbers);
out.innerHTML += numbers;