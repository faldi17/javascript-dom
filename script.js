document.title = 'Belajar JavaScript DOM';

const body = document.body;
body.append('HELLO WORLD');

const h1 = document.createElement('h1'); // <h1></h1>
h1.textContent = 'Keren Bro Belajar DOM'; // <h1>Keren Bro Belajar DOM</h1>

body.append(h1);