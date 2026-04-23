const btn = document.getElementById('share-btn');

const menu = document.getElementById('share-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

