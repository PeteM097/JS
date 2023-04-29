const out = document.querySelector(".out");

// rest operator = ... when used along with function parameter
// rest parameter should be last parameter in function
function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    const discounted = total * (1 - discount);
    console.log(discounted);
    out.innerHTML += discounted;
}

sum(0.1, 20, 30, 1);