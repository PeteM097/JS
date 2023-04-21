const out = document.querySelector(".out");

// .sort() method useful for arrays containing strings / numbers
const numbers = [2, 3, 1, 4];
numbers.sort();
console.log(numbers);
out.innerHTML += `[${numbers}]<br>`;

numbers.reverse();
console.log(numbers);
out.innerHTML += `[${numbers}]<br>`;

// extra work needed for arrays containing objects

function Course(id, name) {
    this.id = id;
    this.name = name;
}
const courses = [ new Course(1, 'Node.js'), 
new Course(2, 'JavaScript') ];

courses.sort(function(a, b) {
    // a > b => 1
    // a < b => -1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA > nameB) return 1;
    if (nameA < nameB) return -1;
    return 0;
});
console.log(courses);
