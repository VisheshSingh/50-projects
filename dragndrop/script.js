const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((empty) => {
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('drop', dragDrop);
});

function dragStart() {
  console.log('Drag start');
  this.className += ' hold';
  setTimeout(() => {
    this.className = '';
  }, 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragEnter(e) {
  e.preventDefault();
  console.log('Drag enter');
}

function dragLeave() {
  console.log('Drag leave');
  this.className = 'empty';
}

function dragOver(e) {
  e.preventDefault();
  this.className += ' hovered';
  console.log('Drag over');
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
