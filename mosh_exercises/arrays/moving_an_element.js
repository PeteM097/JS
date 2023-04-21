const out = document.querySelector(".out");

const numbers = [5, 10, 15, 20, 25];

function move(array, index, offset) {
    if(index < 0 || index >= array.length) {
        console.error("Invalid index.");
        return;
    }
    const position = index+offset;
    if(position < 0 || position >= array.length) {
        console.error("Invalid offset.")
        return;
    }
    const output = [...array];
    output.splice(index, 1);
    output.splice(position, 0, array[index]);
    return output;
}

console.log(move(numbers, 1, 3));
