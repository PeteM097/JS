const out = document.querySelector('.out');

// Template: ``

const message = 'This is my<br> \'first\' message.';

const another = `This is my <br>
'first' message`;

out.innerHTML += message;
out.innerHTML += '<br><br>';
out.innerHTML += another;
out.innerHTML += '<br><br>';

const name = 'Zach';
const email1 = 'Hi ' + name + ',<br>Thank you for subbing to ' + 
' my newsletter.<br>Regards,<br>Peter';
const email2 = `Hi ${name},<br>Thank you for subbing to my 
newsletter.<br>Regards,<br>Peter`;

out.innerHTML += email1;
out.innerHTML += '<br><br>';
out.innerHTML += email1;