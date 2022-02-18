const box = document.getElementById('box');
const message = document.getElementById('message');

box.addEventListener('mouseenter', showMessageEnterBox);
box.addEventListener('mouseleave', showMessageLeaveBox);

function showMessageEnterBox() {
  message.innerText = 'Está dentro de la caja rosa';
}

function showMessageLeaveBox() {
  message.innerText = 'Está fuera de la caja rosa';
}
