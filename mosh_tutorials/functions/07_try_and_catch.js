const out = document.querySelector(".out");

const person = {
    firstName: "Peter",
    surName: "Millington",
    get fullName() {
        return `${person.firstName} ${person.surName}`;
    },
    set fullName(value) {
        if (typeof value !== "string")
            throw new Error("Value is not a string.");  
        const parts = value.split(" ");
        if (parts.length !== 2)
            throw new Error("Enter a first and last name.");
        this.firstName = parts[0];
        this.surName = parts[1];
    }
}

try { person.fullName = null; }
catch(e) { alert(e); }


console.log(person)