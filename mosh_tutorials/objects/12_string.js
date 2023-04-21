const out = document.querySelector(".out");

// String primitive:
const message = 'This is my first message.';

// When '.' notation used with string primitive,
// JS 'wraps' it in a string object.
out.innerHTML += message.length;
out.innerHTML += '<br>';
out.innerHTML += message[0];
out.innerHTML += '<br>';
out.innerHTML += message.includes('my');
out.innerHTML += '<br>';
out.innerHTML += message.includes('not');
out.innerHTML += '<br>';
out.innerHTML += message.startsWith('This');
out.innerHTML += '<br>';
out.innerHTML += message.startsWith('this');
out.innerHTML += '<br>';
out.innerHTML += message.endsWith('.');
out.innerHTML += '<br>';
out.innerHTML += message.endsWith('e');
out.innerHTML += '<br>';
out.innerHTML += message.indexOf('s');
out.innerHTML += '<br>';
out.innerHTML += message.indexOf('my');
out.innerHTML += '<br>';
out.innerHTML += message.replace('first', 'second');
out.innerHTML += '<br>';
out.innerHTML += message;
out.innerHTML += '<br>';
out.innerHTML += message.toUpperCase();

const message_with_spaces = ' This is my first message. ';

out.innerHTML += '<br>';
out.innerHTML += message_with_spaces;
out.innerHTML += '<br>';
out.innerHTML += message_with_spaces.trim();

const message_with_esc = 'This is my \'first message';
out.innerHTML += '<br>';
out.innerHTML += message_with_esc;

const message_with_nl = 'This is my <br> first message';
out.innerHTML += '<br>';
out.innerHTML += message_with_nl;

out.innerHTML += '<br>';
out.innerHTML += message.split(' ');


//String object:
const another = new String('hi');