const out = document.querySelector(".out");

// Object-Oriented Programming (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        out.innerHTML += "draw";
    }
};

circle.draw(); //Method