// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.classList.toggle('active');
//     console.log('ok');
// });

const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

// for(let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         // close[i].parentElement.classList.toggle('active');
//         e.target.parentElement.classList.toggle('active');
//         // console.log(e.target);
//     });
// };

close.forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.target.parentElement.classList.toggle('active');
    });
});


// DOM METHOD
const nama = document.querySelector('.nama');

console.log(nama.parentElement);
console.log(nama.parentNode);
console.log(nama.parentElement.parentElement);
console.log(nama.nextSibling);
console.log(nama.nextElementSibling);
console.log(nama.previousElementSibling);
console.log(nama.nextElementSibling.nextElementSibling);