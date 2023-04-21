const out = document.querySelector(".out");

const numbers = [0, 20, 40, 60, 80];
console.log(numbers)
out.innerHTML += numbers + "<br><br>"
//End
const last = numbers.pop();
console.log(numbers);
out.innerHTML += numbers + "<br>"
console.log(last);
out.innerHTML += last + "<br><br>"
//Beginning
const first = numbers.shift();
console.log(numbers);
out.innerHTML += numbers + "<br>"
console.log(first);
out.innerHTML += first + "<br><br>"
//Middle
//Parameters: index, number of elements to be deleted
const middle = numbers.splice(1, 1);
console.log(numbers);
out.innerHTML += numbers + "<br>"