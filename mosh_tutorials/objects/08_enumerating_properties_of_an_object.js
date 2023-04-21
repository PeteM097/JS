const out = document.querySelector(".out");

const circle = {
    radius:1,
    draw() {
        // out.innerHTML += 'draw';
        console.log('draw');
    }
}

for (let key in circle) {
    // out.innerHTML += key;
    // out.innerHTML += circle[key];
    console.log(key, circle[key]);
}

// for(let key of circle) {
//     // out.innerHTML += key;
//     console.log(key);
// }

// Throws Uncaught TypeError because for->of loops can only be 
// used on iterables, and objects are not iterable.
// However, for->of could be used on  the Object.keys() method,
// because it returns an array.

for(let key of Object.keys(circle)) {
    // out.innerHTML += key;
    console.log(key);
}

for(let entry of Object.entries(circle)) {
    // out.innerHTML += key;
    console.log(entry);
}

if('radius' in circle) {
    // out.innerHTML += 'yes';
    console.log('yes');
}