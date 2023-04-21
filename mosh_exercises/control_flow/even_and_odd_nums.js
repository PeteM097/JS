const out = document.querySelector(".out");

function showNumbers(limit) {
    var output = "";
    for(num = 0; num <= limit; num++) {
        output += num + " ";
        output += (num % 2 == 0) ? "EVEN" : "ODD";
        output += "<br>";
    }
    return output;
}

out.innerHTML = showNumbers(prompt("Enter a number."));