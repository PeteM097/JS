const out = document.querySelector(".out");

// Prime (whose factors are only 1 and itself)
// Composite

function isPrime(num) {
    for(var fac = 2; fac < num; fac++) 
        if(num % fac === 0) return false;
    
    return true;
}

function showPrimes(limit) {
    var output = "";

    for(var num = 2; num <= limit; num++) 
        output += (isPrime(num)) ? (num + " ") : "";
    
    return output;
}

out.innerHTML = showPrimes(prompt("Please enter a number."));