window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 500) {
        header.style.backgroundColor = 'black'; // 500px'den sonra background rengini değiştir
    } else {
        header.style.backgroundColor = 'transparent'; // 500px'den önceki background rengini siyah olarak ayarla
    }
});