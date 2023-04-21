const out = document.querySelector(".out");

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

function calcAvg(array) {
    var sum = 0;
    for(var item of array) { sum += item; }
    return sum / array.length;
}

function calculateGrade(marks) {
    const avgMark = calcAvg(marks);
    if(avgMark < 60) return 'F';
    if(avgMark < 70) return 'D';
    if(avgMark < 80) return 'C';
    if(avgMark < 90) return 'B';
    return 'A';
}

const myMarks = [50, 50, 50]
out.innerHTML = calculateGrade(myMarks);