document.title = 'Belajar JavaScript DOM';

const body = document.body;
/*
    - jadi textContext dan innerText hampir sama dia hanya masukin teks gak peduli itu tag html atau bukan
    - sedangkan innerHTML masukin teks dan mendeteksi tag html
*/
const h1 = document.createElement('h1'); // <h1></h1>
h1.textContent = '<marquee>Keren Bro Belajar DOM</marquee>'; // <h1>Keren Bro Belajar DOM</h1>

const myName = document.createElement('p');
myName.innerHTML = '<marquee>Nama saya Al Khawarizmi</marquee>';

const yourName = document.createElement('b');
yourName.innerText = '<marquee>Orang yang kusayangi adalah ...</marquee>';

body.append(h1);
body.append(myName);
body.append(yourName);