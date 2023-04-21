const out = document.querySelector(".out");

const numbers = [2, 4, 3, 1];
// function getMax(array) {
//     if(array.length === 0) return undefined;
//     let max = array[0];
//     for(let i = 1; i < array.length; i++) 
//         if(array[i] > max) max = array[i];
//     return max;
// }

function getMax(array){
    return array.reduce((accumulator, current) => {
        if(current > accumulator)
            return current;
        return accumulator;
    });
}
 
console.log(getMax(numbers));
