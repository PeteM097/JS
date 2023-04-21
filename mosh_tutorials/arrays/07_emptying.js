const out = document.querySelector(".out");

let numbers = [100, 300, 500, 700, 900];
let another = numbers;
console.log(numbers)
out.innerHTML += `numbers = [${numbers}]<br>`;
console.log(another);
out.innerHTML += `another = [${another}]<br><br>`;

// Solution 1: re-assign to new array
// (only works if array is not const and there are not multiple
// references to original array)
numbers = [];
console.log(numbers)
out.innerHTML += `numbers = [${numbers}]<br>`;
console.log(another);
out.innerHTML += `another = [${another}]<br><br>`;

// Solution 2: set .length property to zero
numbers = another;
numbers.length = 0;
console.log(numbers)
out.innerHTML += `numbers = [${numbers}]<br>`;
console.log(another);
out.innerHTML += `another = [${another}]<br><br>`;

// Solution 3: .splice() method
let numbers2 = [1, 10, 100, 1000, 10000];
let another2 = numbers2;
numbers2.splice(0, numbers2.length) // index, num elems to delete
console.log(numbers2)
out.innerHTML += `numbers2 = [${numbers}]<br>`;
console.log(another2);
out.innerHTML += `another2 = [${another}]<br><br>`;

// Solution 4: .pop() method
let numbers3 = [2, 4, 6, 8, 10];
let another3 = numbers3;
while(numbers3.length > 0) {
    numbers3.pop();
}
console.log(numbers3)
out.innerHTML += `numbers3 = [${numbers}]<br>`;
console.log(another3);
out.innerHTML += `another3 = [${another}]<br><br>`;

// Solution 1 and 2 are usually most efficient.