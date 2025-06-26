const btnMenu = document.getElementById('btn-menu');
const opacity = document.getElementById('opacity');
const nav = document.querySelector('nav');

btnMenu.addEventListener('click', function() {
    console.log('Menu button clicked');
    nav.style.right = '-10px';
    opacity.style.display = 'block';
});

opacity.addEventListener('click', function() {
    console.log('opacity button clicked');
    nav.style.right = '-80vw';
    opacity.style.display = 'none';
});