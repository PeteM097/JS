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

const circle1 = createCircle(1);
const circle2 = createCircle(1);
circle1.draw();
out.innerHTML += "<br>";
circle2.draw();