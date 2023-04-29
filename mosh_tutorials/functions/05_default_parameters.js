const out = document.querySelector(".out");

function interest(principal, rate = 3.5, years = 5) {
    const output = principal * rate / 100 * years;
    console.log(output);
    out.innerHTML += output;
}
// It's best practice to put all parameters with default values
// at the end of the list of arguments.

interest(10000, 3.5, 5);