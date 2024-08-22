// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.classList.toggle('active');
//     console.log('ok');
// });

// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

// for(let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         // close[i].parentElement.classList.toggle('active');
//         e.target.parentElement.classList.toggle('active');
//         // console.log(e.target);
//     });
// };

// close.forEach(function(element) {
//     element.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none'; // atau bisa display none
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });


// // DOM METHOD
// const nama = document.querySelector('.nama');

// console.log(nama.parentElement);
// console.log(nama.parentNode);
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextSibling);
// console.log(nama.nextElementSibling);
// console.log(nama.previousElementSibling);
// console.log(nama.nextElementSibling.nextElementSibling);

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('ok');
//     })
// })

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }else {
        alert('ads');
    }
});