// window.addEventListener('scroll', display);

// display();

// function display() {
//   const boxes = document.querySelectorAll('.box');
//   const triggerBottom = (window.innerHeight / 5) * 4;
//   boxes.forEach((box) => {
//     const top = box.getBoundingClientRect().top;
//     if (top < triggerBottom) {
//       box.classList.add('show');
//     } else {
//       box.classList.remove('show');
//     }
//   });
// }

// Using Intersection observer
// STEP 1 - callback
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('In view', entry.target);
      entry.target.classList.add('show');
    } else {
      console.log('Out of view');
      entry.target.classList.remove('show');
    }
  });
};

// STEP 2 - Options
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
};

// STEP 3 - Instantiate Intersection Observer
const observer = new IntersectionObserver(callback, options);

document.querySelectorAll('.box').forEach((target) => {
  observer.observe(target);
});
