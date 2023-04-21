const out = document.querySelector(".out");

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisble by both 3 and 5 => FizzBuzz
// Not divisible by either => input
// Input not number => "Not a number."

function fizzBuzz(input) {
    if(typeof input !== "number") {
        return NaN;
    }

    let answer = "";
    answer += (input % 3 === 0) ? "Fizz" : "";
    answer += (input % 5 === 0) ? "Buzz" : "";
    
    return (answer === "") ? input : answer;
}

out.innerHTML = fizzBuzz(15);