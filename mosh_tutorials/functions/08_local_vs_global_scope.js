const out = document.querySelector(".out");

const colour = "Cyan"; // global scope: accessible everywhere

function start() {
    const message = "Hello."; 
    // local scope: accessible only within start()
    const colour = "Crimson";
    // local variables take presidence over global ones
    console.log(colour); // returns "Crimson", NOT "Cyan"
}

function stop() {
    const message = "Goodbye.";
    // local scope: only accessible only within stop()
}

start();