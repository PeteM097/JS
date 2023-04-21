const out = document.querySelector(".out");

let array=[28, 14, 21, 7, 35];
for(x of array){
    out.innerHTML += x + " ";
}
array.map(x => out.innerHTML += x + " ");

// array.pop();
// out.innerHTML += "<br>" + array;
// array.push(47);
// out.innerHTML += "<br>" + array;
array.sort();
out.innerHTML += "<br>" + array;
