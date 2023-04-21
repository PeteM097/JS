const out = document.querySelector(".out");

const numbers = [5, 10, 15, 20, 25];

// for->of loop
for(let number of numbers) {
    console.log(number);
    out.innerHTML += `${number} `;
}

out.innerHTML += "<br><br>";

// .forEach() loop
numbers.forEach(function(number) {
    console.log(number);
    out.innerHTML += `${number} `; 
});

out.innerHTML += "<br><br>";

// With arrow function:
numbers.forEach(number => console.log(number));
numbers.forEach(number => out.innerHTML += `${number} `);

out.innerHTML += "<br><br>";

//Callback function inside .forEach() can take optional second
//parameter, index:
numbers.forEach((number, index) => console.log(index, number));
numbers.forEach((number, index) => out.innerHTML += 
`index: ${index} number: ${number}<br>`);