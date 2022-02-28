const buttonModal = document.getElementById('show-modal');

buttonModal.addEventListener('click', showModal);

const modalHtmlElement = document.getElementById('view-modal');
const boostrapModal = new bootstrap.Modal(modalHtmlElement);

function showModal() {
  const modalTitle = document.querySelector('#view-modal .modal-title');
  const modalBody = document.querySelector('#view-modal .modal-body');
  boostrapModal.show();
  modalBody.innerText = 'Hola Mundo';
  modalTitle.innerText = 'Mensaje';
}
