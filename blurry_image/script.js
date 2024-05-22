const bg = document.querySelector('.bg');
const loading = document.querySelector('.loading');

let load = 1;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loading.innerText = `${load}%`;
  loading.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(num, amin, amax, bmin, bmax) {
  return ((num - amin) * (bmax - bmin)) / (amax - amin) + bmin;
}
