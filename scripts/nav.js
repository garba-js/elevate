const navButton = document.getElementById('nav-button');
const navBar = document.querySelector('.navigation');

navButton.addEventListener('click', () => {
    navBar.classList.toggle('show');  // toggles overlay
    navButton.classList.toggle('show'); // optional: change hamburger to cross
});


const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Initialize
showSlide(currentIndex);
