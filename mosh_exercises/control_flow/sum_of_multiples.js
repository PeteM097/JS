const out = document.querySelector(".out");

function sum(limit) {
    var total = 0;

    for(var i = 0; i <= limit; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }

    return total;
}

const inputNum = prompt("Please enter a number.");

out.innerHTML = sum(inputNum);