const out = document.querySelector(".out");

let address1 = new Address("a", "b", "c");
let address2 = new Address("a", "b", "c");
let address3 = address1;

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}

out.innerHTML += areEqual(address1, address2);
out.innerHTML += "<br>";
out.innerHTML += areSame(address1, address2);
out.innerHTML += "<br><br>";
out.innerHTML += areEqual(address1, address3);
out.innerHTML += "<br>";
out.innerHTML += areSame(address1, address3);