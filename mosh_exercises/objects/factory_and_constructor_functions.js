const out = document.querySelector(".out");

// Factory Function
function createAddress(street, city, zipCode) {
    return {
        street, city, zipCode
    };
}

let address1 = createAddress("Reading Road", 
"Henley-on-Thames", "RG9 1AG")

for(let key in address1) { out.innerHTML += `${key}: 
${address1[key]} <br>` }

out.innerHTML += "<br>";

// Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let address2 = new Address("Reading Road", "Henley-on-Thames", 
"RG9 1AG")

for(let key in address2) { out.innerHTML += `${key}: 
${address1[key]} <br>` }