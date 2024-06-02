const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

let activeIndex = 1;

setBgImage();

function setBgImage() {
  body.style.background = slides[activeIndex].style.backgroundImage;
}

function setSliderImage() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeIndex].classList.add('active');
}

function nextSlide() {
  activeIndex++;
  if (activeIndex > slides.length - 1) {
    activeIndex = 0;
  }
  setBgImage();
  setSliderImage();
}

function prevSlide() {
  activeIndex--;
  if (activeIndex < 0) {
    activeIndex = slides.length - 1;
  }
  setBgImage();
  setSliderImage();
}

// Event listeners
leftBtn.addEventListener('click', prevSlide);
rightBtn.addEventListener('click', nextSlide);
