const thumbs = document.querySelectorAll('.thumb');
const jumbo = document.querySelector('.jumbo');
thumbs.forEach(function(img) {
    img.addEventListener('click', function(e) {
        let src = img.getAttribute('src');
        jumbo.setAttribute('src', src);
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade')
        }, 500);
        
        thumbs.className = 'thumb'
        
        e.target.classList.add('active');
            e.preventDefault();
            // console.log(src);
        })
})