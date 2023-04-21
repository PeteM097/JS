const out = document.querySelector(".out");

function priceRange(label, tooltip, minPerPerson, maxPerPerson) {
    return { label, tooltip, minPerPerson, maxPerPerson };
}

function restaurant(averagePerPerson) {
    return { averagePerPerson };
}

let priceRanges = [priceRange('$', 'Inexpensive', 0, 10), 
priceRange('$$', 'Moderately Expensive', 11, 15), 
priceRange('$$$', 'Very Expensive', 16, 20)]

let restaurants = [restaurant(5)]