const out = document.querySelector(".out");

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

out.innerHTML= showProperties(movie);

function showProperties(obj) {
    var output = "";
    for(var prop in obj) {
        if(typeof obj[prop] === 'string') { 
            output += prop + " " + obj[prop] + "<br>"; 
        }
    }
    return output;
}