// const p3 = document.querySelector(".p3");

// function ubahWarnaP2(){
//     p2.style.backgroundColor = "lightblue";
//     p2.style.color = 'white';
// }
// function ubahWarnaP3(){
//     p3.style.backgroundColor = "lightblue";
//     p3.style.color = 'white';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksBaru = document.createTextNode('item baru');
//     liBaru.appendChild(teksBaru);
//     ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function(){
//     p3.style.color = 'red';
// }

p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
})
p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'lightgreen';
})

// Daftar Event
// Mouse Event
// Keyboard Event
// Resources Event
// Focus Event
// View Event
// Form Event
// Css Animation & Transition Event
// Drag & Drop Event
// DLL

// https//developer.mozilla.org/en-Us/docs/Web/Events

// Mouse Event
// click
// dblclick
// mouseover
// mouseenter
// mouseup
// whell
// dll

// Keyboard Event
// keydown
// keypress
// keyup

// View Event
// resize
// scroll

// Form Event
// reset
// submit
