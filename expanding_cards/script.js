const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.container');

const clickHandler = (e) => {
  if (e.target.classList.contains('panel')) {
    panels.forEach((panel) => panel.classList.remove('active'));
    e.target.classList.add('active');
  }
};

container.addEventListener('click', clickHandler);
