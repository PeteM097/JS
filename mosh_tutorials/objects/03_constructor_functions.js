const out = document.querySelector(".out");

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            out.innerHTML += "draw";
        }
    };
}

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() { out.innerHTML += "draw"; }
}

// Create object that is instance of Circle
const circle = new Circle(1);