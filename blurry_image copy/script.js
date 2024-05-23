window.addEventListener('scroll', display);

display();

function display() {
  const boxes = document.querySelectorAll('.box');
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const top = box.getBoundingClientRect().top;
    if (top < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
