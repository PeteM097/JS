const out = document.querySelector(".out");

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        out.innerHTML += "draw";
    }
}

// const Circle1 = new Function('radius', 
// `this.radius = radius;
// this.draw = function() {
//     out.innerHTML += "draw";
// }`
// );

// const circle = new Circle1(1);

Circle.call({}, 1);
Circle.apply({}, 1);

const another = new Circle(1);
