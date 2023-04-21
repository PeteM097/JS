const out = document.querySelector(".out");

// Arrow functions are a shorter way to pass a function 
// as an argument for another function.

function Course(id, name) {
    this.id = id;
    this.name = name;
}

const courses = [
    new Course(1, "a"),
    new Course(2, "b"),
    new Course(3, "c"),
    new Course(4, "d"),
];

// const course = courses.find(function(course) {
//     return course.name === "a";
// });

const course = courses.find(course => course.name === "a");

console.log(course);