const toggleBtn = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const time = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

toggleBtn.addEventListener('click', () => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    toggleBtn.innerText = 'Dark Mode';
  } else {
    html.classList.add('dark');
    toggleBtn.innerText = 'Light Mode';
  }
});

function setTime() {
  const date = new Date();
  const hour = (date.getHours() / 12) * 360;
  const minute = (date.getMinutes() / 60) * 360;
  const seconds = (date.getSeconds() / 60) * 360;
  hourEl.style.transform = `translateY(-100%) rotate(${hour}deg)`;
  minuteEl.style.transform = `translateY(-100%) rotate(${minute}deg)`;
  secondEl.style.transform = `translateY(-100%) rotate(${seconds}deg)`;
  const hours = date.getHours() % 12;
  const ampm = hours > 12 ? 'PM' : 'AM';
  time.innerHTML = `${hours}:${
    date.getMinutes() < 10 ? `0${date.getMinutes}` : date.getMinutes()
  } ${ampm}`;
  dateEl.innerHTML = `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } <span>${date.getDate()}</span>`;
}

setInterval(setTime, 1000);
