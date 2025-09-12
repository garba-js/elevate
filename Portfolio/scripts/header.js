const navButton = document.getElementById('nav-button');
const navBar = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navBar.classList.toggle('show');  // toggles overlay
    navButton.classList.toggle('show'); // optional: change hamburger to cross
});

// ✅ Display Current Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

