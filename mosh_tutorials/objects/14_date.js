const out = document.querySelector('.out');

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9, 0);
// In JS dates the month numbers start from 0 rather than 1.

now.setFullYear(2017);
out.innerHTML += now.toDateString();
out.innerHTML += '<br>';
out.innerHTML += now.toISOString(); // Format that includes time