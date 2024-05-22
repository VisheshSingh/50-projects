const progress = document.querySelector('.progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const cirles = document.querySelectorAll('.circle');

let currentActive = 1;
function nextHandler() {
  currentActive++;
  if (currentActive > cirles.length) {
    currentActive = cirles.length;
  }
  updateProgress();
}

function prevHandler() {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  updateProgress();
}

function updateProgress() {
  progress.style.width =
    ((currentActive - 1) / (cirles.length - 1)) * 100 + '%';

  cirles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === cirles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

next.addEventListener('click', nextHandler);
prev.addEventListener('click', prevHandler);
