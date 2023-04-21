const out = document.querySelector(".out");

// street
// city
// zipCode
// showAddress(address)

const address = { street: "Reading Road", 
city: "Henley-on-Thames", zipCode: "RG9 1AG" };

function showAddress(address) {
    for(let key in address) {
        out.innerHTML += key + ": " + address[key] + "<br>";
    }
}
showAddress(address);