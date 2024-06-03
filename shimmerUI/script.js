const header = document.querySelector('#header');
const title = document.querySelector('.title');
const excerpt = document.querySelector('.excerpt');
const pic = document.querySelector('.pic');
const name = document.querySelector('#name');
const date = document.querySelector('#date');
const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

function setContent() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />';
  title.innerHTML = 'Lorem ipsum rado texpot isp';
  excerpt.innerHTML =
    'Lorem ipsum rado texpot isp you thsimag asow ikn ooa ae abscasfd.';
  pic.innerHTML = `<img
    class="pic"
    src="https://randomuser.me/api/portraits/men/45.jpg"
    alt=""
  />`;
  name.innerHTML = 'John Doe';
  date.innerHTML = 'Oct, 08 2024';

  animatedBgs.forEach((item) => item.classList.remove('animated-bg'));
  animatedBgTexts.forEach((item) => item.classList.remove('animated-bg-text'));
}

setTimeout(setContent, 2500);
