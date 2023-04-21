const out = document.querySelector(".out");

function Movie(title, year, rating) {
    this.title = title;
    this.year = year;
    this.rating = rating;
}

const movies = [
    new Movie('a', 2018, 4.5), 
    new Movie('b', 2018, 4.7), 
    new Movie('c', 2018, 3), 
    new Movie('d', 2017, 4.5), 
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const output = movies
.filter(m => m.year === 2018 && m.rating > 4)
.sort((a, b) => a.rating - b.rating)
.reverse()
.map(m => m.title);

console.log(output);
out.innerHTML += output;