const out = document.querySelector(".out");

function sum(a, b) {
    console.log(arguments); 
    return a + b;
}

console.log(sum(1, 2)); // 3
console.log(sum(1 )); // NaN (not a number)
console.log(sum()); // NaN
console.log(sum(1, 2, 3, 4, 5)); // 3 (extra arguments ignored)

out.innerHTML += `sum(1, 2) = ${sum(1, 2)}<br>`
out.innerHTML += `sum(1) = ${sum(1)}<br>`;
out.innerHTML += `sum() = ${sum()}<br>`;
out.innerHTML += `sum(1, 2, 3, 4, 5) = 
${sum(1, 2, 3, 4, 5 )}<br><br>`;

// The arguments keyword returns an object containing:

// - A key-value pairing for every argument where 
// key = argument index and value = argument value

// - A length property which returns the number of arguments

// - A callee property which returns the currently executing
// function

function sum2() {
    let total = 0;
    for (let value of arguments) 
        total += value;
    return total;
}

// sum2 allows for variable number of arguments
console.log(sum2(1, 2, 3, 4, 5));
out.innerHTML += `sum2(1, 2, 3, 4, 5) = 
${sum2(1, 2, 3, 4, 5 )}<br>`;
