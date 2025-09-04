const navButton = document.getElementById('nav-button');
const navBar = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navBar.classList.toggle('show');  // toggles overlay
    navButton.classList.toggle('show'); // optional: change hamburger to cross
});
