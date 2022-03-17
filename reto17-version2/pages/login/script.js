const fields = document.querySelectorAll('#form-login .form-field');
const submitButton = document.querySelector('#form-login button');

const modalHtmlElement = document.getElementById('view-modal');
const boostrapModal = new bootstrap.Modal(modalHtmlElement);

const login = {
  email: '',
  password: '',
};

const validationsSchema = {
  email: [required, email],
  password: [required],
};

const errors = {};

fields.forEach((field) => {
  field.addEventListener('input', (event) => setFieldValue(event, login));
  field.addEventListener('blur', (event) => setFieldValue(event, login));
});

submitButton.disabled = true;
submitButton.addEventListener('click', () => {
  try {
    validate(fields);
    showModalValid();
  } catch (error) {
    showModalInvalid();
  } finally {
    submitButton.disabled = isFormInvalid(errors);
  }
});

function showModalValid() {
  const modalTitle = document.querySelector('#view-modal .modal-title');
  const modalBody = document.querySelector('#view-modal .modal-body');
  boostrapModal.show();
  modalBody.innerText = `
        Email: ${login.email} 
        Contraseña: ${login.password}
  `;
  modalTitle.innerText = `Datos del logueo`;
}

function showModalInvalid() {
  const modalTitle = document.querySelector('#view-modal .modal-title');
  const modalBody = document.querySelector('#view-modal .modal-body');
  boostrapModal.show();
  modalBody.innerText = 'Hay errores en el formulario.';
  modalTitle.innerText = `ERROR`;
}
