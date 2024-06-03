const textEl = document.querySelector('.text');
const speedEl = document.querySelector('#speed');
const text = 'We love JavaScript';
let idx = 1;
let speed = 300 / 1;

writeText();

function writeText() {
  textEl.innerHTML = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
  speed = 300 / +e.target.value;
});
