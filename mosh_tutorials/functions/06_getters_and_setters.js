const out = document.querySelector(".out");

// getters => access properties
// setters => change (mutate) them

const person = {
    firstName: "Peter",
    surName: "Millington",
    get fullName() {
        return `${person.firstName} ${person.surName}`;
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.surName = parts[1];
    }
}

console.log(person.fullName);
out.innerHTML += person.fullName;

person.fullName = "Joe Blogs";
out.innerHTML += "<br>";

console.log(person);
out.innerHTML += person.fullName;