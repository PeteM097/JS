const out = document.querySelector(".out");

const circle = {
    radius:1,
    draw() {
        // out.innerHTML += 'draw';
        console.log('draw');
    }
};

// METHOD 1 - USING FOR->IN LOOP:

// const another = {};
// for(let key in circle) {
//     another[key] = circle[key];
// }


// METHOD 2 - USING Object.assign() FUNCTION:

// const another = Object.assign({color:'yellow'}, circle);


// METHOD 3 - USING SPREAD OPERATOR(...):

const another = { size:'large', ...circle };


// out.innerHTML += another;

console.log(another);