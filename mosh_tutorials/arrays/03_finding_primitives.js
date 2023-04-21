const out = document.querySelector(".out");

const numbers = [1, 2, 3, 1, 4];

out.innerHTML += numbers.indexOf("e") + "<br>";
// Returns index of parameter in array, or -1 if not present.
out.innerHTML += numbers.lastIndexOf(1) + "<br>";
// Returns LAST index of parameter in array, or -1 if not 
//present.
out.innerHTML += numbers.includes(2) + "<br>";
// Returns true if array contains parameter, otherwise false.
// All these methods include an optional starting index 
//parameter.
out.innerHTML += numbers.includes(3, 3); 
// This returns false even though the whole array contains 3,
// because the method is only applied to elements at or 
// above index 3.