const ubahwarna = document.getElementById("ubahwarna");
const tema = document.querySelector('body');

ubahwarna.addEventListener('click', function() {
    tema.classList.toggle('dark');
    console.log('changes theme... ');
});

const acakTema = document.createElement('button');
const ttombol = document.createTextNode('Acak Tema');
acakTema.appendChild(ttombol);
acakTema.setAttribute('type', 'button');
ubahwarna.after(acakTema);

acakTema.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb( ${r}, ${g}, ${b})`;
    ubahwarna.style.cursor = 'not-allowed';
    console.log(`red:${r}, green:${g}, blue:${b}`);
});
const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');
const txClrRed = document.querySelector('.text-color-red');
const txClrGreen = document.querySelector('.text-color-green');
const txClrBlue = document.querySelector('.text-color-blue');
sRed.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    txClrRed.innerHTML = `${r}`;
    document.body.style.backgroundColor = `rgb(${r},${g},${b}`;
});
sGreen.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    txClrGreen.innerHTML = `${g}`;
    document.body.style.backgroundColor = `rgb(${r},${g},${b}`;
});
sBlue.addEventListener('input', function() {
    const r = sRed.value;
    const g = sGreen.value;
    const b = sBlue.value;
    txClrBlue.innerHTML = `${b}`;
    document.body.style.backgroundColor = `rgb(${r},${g},${b}`;
});

document.body.addEventListener('mouseover', function(e) {
    // posisi mouse
    // console.log(e.clientX); dan y
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerWidth) * 255);
    const zPos = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, ${zPos})`
});