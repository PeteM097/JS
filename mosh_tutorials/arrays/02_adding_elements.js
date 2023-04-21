const out = document.querySelector(".out");

const numbers = [3, 4];
out.innerHTML += numbers + "<br>";
// End
numbers.push(5, 6);
out.innerHTML += numbers + "<br>";
// Beginning
numbers.unshift(1, 2);
out.innerHTML += numbers + "<br>";
// Middle
numbers.splice(2, 0, "a", "b"); // Parameters: 
                  // start, items to delete, items to add
out.innerHTML += numbers + "<br>";                 