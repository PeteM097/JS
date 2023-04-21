const out = document.querySelector(".out");

function showStars(rows) {
    var output = "";

    for(var row = 1; row <= rows; row++) {
        for(var col = 1; col <= row; col++) { output += "*" } 
        output += "<br>"
    }

    return output;
}

out.innerHTML = showStars(prompt("Please enter a number."));