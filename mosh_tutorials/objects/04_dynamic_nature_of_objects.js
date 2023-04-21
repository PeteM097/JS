const out = document.querySelector(".out");

const circle = {
    radius: 1
}

// Add properties and methods
circle.color = "yellow";
circle.draw = function() {}

// Remove properties and functions with "delete" keyword
delete circle.color;
delete circle.draw;

out.innerHTML = circle;

// "const" in this context means we can't reassign circle,
// even though we can add or remove properties / functions