const out = document.querySelector(".out");

const numbers = [-2, -1, 0, 1, 2];

const positives = numbers.filter(n => n >= 0);

const objects = positives.map( n => ({value: n}) );

const items = positives.map(n => `<li>${n}</li>`);

const html = `<ul>${items.join("")}</ul>`;

console.log(positives);
out.innerHTML += `[${positives}]<br>`;
console.log(html);
out.innerHTML += html;
console.log(objects);
for(let object of objects) {
    out.innerHTML += object.value + " ";
}