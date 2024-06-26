const carousel = document.querySelector('.carousel');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const imgs = document.querySelectorAll('img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > imgs.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }

  carousel.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

prev.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});
next.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});
