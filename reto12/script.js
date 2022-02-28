const radioBox = document.getElementById('radio');
const box = document.getElementById('box');
const message = document.getElementById('message');

radioBox.addEventListener('input', changeBorderBox);

function changeBorderBox(event) {
  box.style.borderRadius = `${event.target.value}% `;
  message.innerText = `${event.target.value}% de 100%`;
}
