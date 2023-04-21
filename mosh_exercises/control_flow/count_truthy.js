const out = document.querySelector(".out");

// "Falsey" values in JavaScript:
//  undefined
//  null
//  ""
//  false
//  0
//  NaN
function countTruthy(array) {
    var count = 0;
    for(var item of array) {
        if(item) { count++; }
    }
    return "Truthy Count: " + count;
}

var my_array = [0, null, undefined, 1, NaN, 3, ""];
out.innerHTML = countTruthy(my_array);