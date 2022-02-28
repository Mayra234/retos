const message1 = document.getElementById('message1');
const message2 = document.getElementById('message2');
const width = document.getElementById('width');
const height = document.getElementById('height');
const box = document.getElementById('box');

width.addEventListener('input', changeWidth);

function changeWidth(event) {
  box.style.width = `${event.target.value}px`;
  message1.innerText = `${event.target.value}px de 500px`;
}

height.addEventListener('input', changeHeight);

function changeHeight(event) {
  box.style.height = `${event.target.value}px`;
  message2.innerText = `${event.target.value}px de 500px`;
}
