const out = document.querySelector(".out");

const first = [2000, 4000, 6000];
const second = [8000, 10000, 12000];

// Combining: .concat(array)
const combined = first.concat(second);
out.innerHTML += 
`first: [${first}]<br>
second: [${second}]<br> 
combined: [${combined}]<br>`;
console.log(combined);

// Slicing: .slice(startIndex, endIndex)
const slice1 = combined.slice(2, 4);
out.innerHTML += `slice1: [${slice1}]<br>`;
const slice2 = combined.slice(2);
out.innerHTML += `slice2: [${slice2}]<br>`;

// Note: when using these methods, primitive values will be 
// copied into the target array, but any objects in the original
// array will have their references copied, not the objects 
// themselves - therefore the equivalent object elements in both
// the input and output array will point to the same object.