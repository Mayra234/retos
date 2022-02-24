const containerDiv = document.getElementById('container');

function createDiv() {
  for (let i = 0; i < 16; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.addEventListener('mouseenter', showColorEnterBox);
    box.addEventListener('mouseleave', showColorLeaveBox);
    containerDiv.appendChild(box);
  }
}

function showColorEnterBox(event) {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    event.target.style.background = 'blue';
  } else if (randomColor == 1) {
    event.target.style.background = 'yellow';
  } else if (randomColor == 2) {
    event.target.style.background = 'red';
  }
}

function showColorLeaveBox(event) {
  event.target.style.background = 'gray';
}

createDiv();
