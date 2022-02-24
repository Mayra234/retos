const listItems = document.getElementById('list-items');

function createLi() {
  for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.innerText = `Item ${i + 1}`;
    li.style.background = 'gray';
    li.addEventListener('click', randomColor);
    listItems.appendChild(li);
  }
}

function randomColor(event) {
  if (event.target.style.background == 'gray') {
    const random = Math.floor(Math.random() * 3);
    if (random == 0) {
      event.target.style.background = 'red';
    } else if (random == 1) {
      event.target.style.background = 'yellow';
    } else if (random == 2) {
      event.target.style.background = 'blue';
    }
  } else {
    event.target.style.background = 'gray';
  }
}

createLi();
