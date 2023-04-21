const out = document.querySelector(".out");

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
// The .includes() method doesn't work with reference types,
// because the object you search for and the object in the 
// array itself will have two different locations in memory.

// Use .find() method instead:
const course = courses.find(function(course) {
    return course.name === "a";
});
// This method takes a function called a predicate as its
// parameter, which will execute for each array element until
// a matching element is returned.
// Returns undefined if object not in array.
for(let entry of Object.entries(course)) {
    out.innerHTML += `${entry[0]}: ${entry[1]} <br>`;
}
console.log(course);

out.innerHTML += "<br>";

const courseIndex = courses.findIndex(function(course) {
    return course.name === "c";
});
out.innerHTML += courseIndex;
console.log(courseIndex);