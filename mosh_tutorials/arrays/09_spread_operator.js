const out = document.querySelector(".out");

// Alternative method of combining arrays.
const first = [2000, 4000, 6000];
const second = [8000, 10000, 12000];

//const combined = first.concat(second);
const combined = [...first, ...second];
//const copy = combined.slice(); 
// .slice() without arguments creates copy of array
const copy = [...combined];

out.innerHTML += 
`first: [${first}]<br>
second: [${second}]<br> 
combined: [${combined}]<br>
copy: [${copy}]`;