const out = document.querySelector(".out");

function isLandscape(width, height) {
    return (width > height);
}

let w = prompt("Enter width.");
let h = prompt("Enter height.");

out.innerHTML = isLandscape(w, h);