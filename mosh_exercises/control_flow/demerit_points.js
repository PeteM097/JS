const out = document.querySelector(".out");

//Speed limit = 70 kmh
// 1 point per 5 km/h over limit
// Math.floor()
// 12 points -> suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint) return 'Ok.';

    const excess_Speed = speed - speedLimit;
    const points = Math.floor(excess_Speed / kmPerPoint);
    return (points >= 12) ? "License Suspended." : ("Points = " + points);
}

out.innerHTML = checkSpeed(prompt("Enter a speed (km/h)."));