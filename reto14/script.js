const buttonStone = document.getElementById('stone');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const modalHtmlElement = document.getElementById('view-modal');
const boostrapModal = new bootstrap.Modal(modalHtmlElement);
const modalTitle = document.querySelector('#view-modal .modal-title');
const modalBody = document.querySelector('#view-modal .modal-body');
let option = '';
let pointPlayer = 0;
let pointPc = 0;

buttonStone.addEventListener('click', validateOptionStone);
buttonPaper.addEventListener('click', validateOptionPaper);
buttonScissors.addEventListener('click', validateOptionScissors);

// Función botón piedra

function validateOptionStone() {
  randomOption();

  if (option === 'piedra') {
    boostrapModal.show();
    modalBody.innerHTML = `
        <h1 style="color: #34eba1">Empate</h1>
        <p>Player: ${buttonStone.value} VS Computadora: ${option}</p>
    `;
    modalTitle.innerText = 'Mensaje';
  } else if (option === 'papel') {
    boostrapModal.show();
    modalBody.innerHTML = `
        <h1 style="color: #eb3434">Has perdido</h1>
        <p>Player: ${buttonStone.value} VS Computadora: ${option}</p>
    `;
    modalTitle.innerText = 'Mensaje';
    computer.innerText = `Computadora: ${(pointPc += 1)}`;
  } else if (option === 'tijera') {
    boostrapModal.show();
    modalBody.innerHTML = `
        <h1 style="color: #59eb34">Has ganado</h1>
        <p>Player: ${buttonStone.value} VS Computadora: ${option}</p>
    `;
    modalTitle.innerText = 'Mensaje';
    player.innerText = `Jugador: ${(pointPlayer += 1)}`;
  }
}

// Función botón papel

function validateOptionPaper() {
  randomOption();
  if (option === 'papel') {
    boostrapModal.show();
    modalBody.innerHTML = `
        <h1 style="color: #34eba1">Empate</h1>
        <p>Player: ${buttonPaper.value} VS Computadora: ${option}</p>
    `;
    modalTitle.innerText = 'Mensaje';
  } else if (option === 'tijera') {
    boostrapModal.show();
    modalBody.innerHTML = `
        <h1 style="color: #eb3434">Has perdido</h1>
        <p>Player: ${buttonPaper.value} VS Computadora: ${option}</p>
    `;
    modalTitle.innerText = 'Mensaje';
    computer.innerText = `Computadora: ${(pointPc += 1)}`;
  } else if (option === 'piedra') {
    boostrapModal.show();
    modalBody.innerHTML = `
        <h1 style="color: #59eb34">Has ganado</h1>
        <p>Player: ${buttonPaper.value} VS Computadora: ${option}</p>
    `;
    modalTitle.innerText = 'Mensaje';
    player.innerText = `Jugador: ${(pointPlayer += 1)}`;
  }
}

// Función botón tijera

function validateOptionScissors() {
  randomOption();
  if (option === 'tijera') {
    boostrapModal.show();
    modalBody.innerHTML = `
        <h1 style="color: #34eba1">Empate</h1>
        <p>Player: ${buttonScissors.value} VS Computadora: ${option}</p>
    `;
    modalTitle.innerText = 'Mensaje';
  } else if (option === 'piedra') {
    boostrapModal.show();
    modalBody.innerHTML = `
        <h1 style="color: #eb3434">Has perdido</h1>
        <p>Player: ${buttonScissors.value} VS Computadora: ${option}</p>
    `;
    modalTitle.innerText = 'Mensaje';
    computer.innerText = `Computadora: ${(pointPc += 1)}`;
  } else if (option === 'papel') {
    boostrapModal.show();
    modalBody.innerHTML = `
        <h1 style="color: #59eb34">Has ganado</h1>
        <p>Player: ${buttonScissors.value} VS Computadora: ${option}</p>
    `;
    modalTitle.innerText = 'Mensaje';
    player.innerText = `Jugador: ${(pointPlayer += 1)}`;
  }
}

function randomOption() {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      option = 'papel';
      break;
    case 1:
      option = 'tijera';
      break;
    case 2:
      option = 'piedra';
      break;
    default:
      break;
  }
}
