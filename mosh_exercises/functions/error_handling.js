const out = document.querySelector(".out");

try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences(numbers, 1);
    console.log(count);
}

catch (e) { console.log(e); }

function countOccurrences(array, searchElement) {
    if(!Array.isArray(array))
        throw e = new Error("First arg is not array.");
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1: 0;
        return accumulator + occurrence;
    }, 0);
}