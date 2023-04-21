const out = document.querySelector(".out");

// Value Types: Number, String, Boolean, Symbol, undefined, null
// Reference Types: Object, Function, Array

let x = 10;
let y = x;
x = 20;

let a = {value: 10};
let b = a;
b.value = 20;

// Primitives are copied by their value
// Objects are copied by their reference

let num = 10;

let obj = { value: 10 };

function increase(num) {
    num++;
}

function increase2(obj) {
    obj.value++;
}

increase(num);
out.innerHTML += num;
out.innerHTML += '<br>';

increase2(obj);
out.innerHTML += obj.value;
