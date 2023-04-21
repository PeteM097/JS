const out = document.querySelector(".out");

const numbers = [2, 3, 2, 3, 2, 3];

function countOccurrences(array, searchElement) {
   return array.filter(value => value === searchElement).length;
}

console.log(countOccurrences(numbers, 2));