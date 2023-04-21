const out = document.querySelector(".out");

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            out.innerHTML += "draw";
        }
    };
}

const circle = createCircle(1);
circle.draw();

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() { out.innerHTML += "draw"; }
}

const another = new Circle(1);

let x = {}; // let x = new Object();