var nav = document.querySelector('nav'); // Identify target
var nbb = document.querySelector('.nbb');
window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 150) {
        nav.style.backgroundColor = 'transparent';
        nbb.style.color = '#fff';
        nav.style.boxShadow = 'none';
    } else {
        nav.style.backgroundColor = '#fff';
        nbb.style.color = '#102421';
        nav.style.boxShadow = '0 0 4px grey';
    }
});