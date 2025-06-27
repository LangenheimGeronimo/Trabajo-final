let button = document.querySelector('.btn-menu');

button.addEventListener('click', () => {
    let content = document.querySelector('.dropdown-content');
    content.classList.toggle('content');
})
