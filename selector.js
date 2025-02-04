const body = document.body;
const btn1 = document.getElementById('btn1');
const btn2 = document.querySelector('.btn2');

const defaultText = 'Click Me!';
btn1.textContent = defaultText;

// styling
btn1.style.backgroundColor = 'red';
btn1.style.color = 'white';
btn1.style.border = 'none';
btn1.style.cursor = 'pointer';
btn1.style.padding = '10px 20px';
btn1.style.fontSize = '24px';

// event
function clickButton() {
    btn1.style.backgroundColor = 'blue';
    const newText = document.createElement('p');
    newText.textContent = 'Balik Lagi Nih Heheh';
    body.append(newText);
}

function ubahTeks() {
    btn1.textContent = 'Ganteng Lu Yah';
}

function oriTeks() {
    btn1.textContent = defaultText
}

function inputText() {
    const newText2 = document.createElement('p');
    newText2.textContent = 'Ini tugas dari bang dea';
    body.append(newText2);
}

function changeColor() {
    const p = document.querySelector('p');
    p.style.color = 'green';
}