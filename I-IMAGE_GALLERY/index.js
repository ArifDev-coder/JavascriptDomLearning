const thumbs = document.querySelectorAll('.thumb');
const jumbo = document.querySelector('.jumbo');
thumbs.forEach(function(img) {
    img.addEventListener('click', function() {
        let src = img.getAttribute('src');
        jumbo.setAttribute('src', src);
        console.log(src);
    })
})