const search = document.querySelector('.search');
const input = document.getElementById('search-input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
