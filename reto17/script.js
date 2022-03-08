const firstName = document.getElementById('first-name');
const secondName = document.getElementById('second-name');
const age = document.getElementById('age');
const cellphoneCity = document.getElementById('cellphone-city');
const message = document.getElementById('message');
const city = document.getElementById('city');
const buttonAdd = document.getElementById('add');
const valid = 'form-control is-valid';
const invalid = 'form-control is-invalid';

city.addEventListener('change', validateCity);
add.addEventListener('click', showModal);

function validateFirstName(event) {
  if (event.match(/^\w{2,10}$/)) {
    firstName.className = valid;
    validateFields();
  } else {
    firstName.className = invalid;
  }
}
function validateSecondName(event) {
  if (event.match(/^\w{2,10}$/)) {
    secondName.className = valid;
    validateFields();
  } else {
    secondName.className = invalid;
  }
}

function validateAge(event) {
  if (event.match(/^\d{2,2}$/)) {
    age.className = valid;
    validateFields();
  } else {
    age.className = invalid;
  }
}

function validateCellphoneCity(event) {
  if (event.match(/^\d{9,9}$/)) {
    cellphoneCity.className = valid;
  } else {
    cellphoneCity.className = invalid;
  }
}

function validateCity(event) {
  if (event.target.value !== '') {
    city.className = valid;
    validateFields();
  } else {
    city.className = invalid;
  }
}

function validateFields() {
  if (
    firstName.value !== '' &&
    secondName.value !== '' &&
    age.value !== '' &&
    city.value !== ''
  ) {
    buttonAdd.disabled = false;
  } else {
    buttonAdd.disabled = true;
  }
}

const modalHtmlElement = document.getElementById('view-modal');
const boostrapModal = new bootstrap.Modal(modalHtmlElement);

function showModal() {
  const modalTitle = document.querySelector('#view-modal .modal-title');
  const modalBody = document.querySelector('#view-modal .modal-body');
  boostrapModal.show();
  modalBody.innerText = `
        Nombres: ${firstName.value} ${secondName.value}
        Edad: ${age.value}
        Número teléfonico: ${cellphoneCity.value}
        Ciudad: ${city.value}
  `;
  modalTitle.innerText = `Datos de ${firstName.value}`;
}
