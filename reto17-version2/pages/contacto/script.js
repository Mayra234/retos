const fields = document.querySelectorAll('#form-contacts .form-field');
const submitButton = document.querySelector('#form-contacts button');

const modalHtmlElement = document.getElementById('view-modal');
const boostrapModal = new bootstrap.Modal(modalHtmlElement);

const contacts = {
  name: '',
  lastName: '',
  idNumber: '',
  email: '',
  password: '',
};

const validationsSchema = {
  name: [required, singleWorld],
  lastName: [required, singleWorld],
  idNumber: [required, (value) => identification(value)],
  email: [required, email],
  password: [required],
};

const errors = {};

fields.forEach((field) => {
  field.addEventListener('input', (event) => setFieldValue(event, contacts));
  field.addEventListener('blur', (event) => setFieldValue(event, contacts));
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
        Nombre completo: ${contacts.name} ${contacts.lastName}
        Número de identificación: ${contacts.idNumber}
        Email: ${contacts.email} 
        Contraseña: ${contacts.password}
  `;
  modalTitle.innerText = `Datos del Contacto`;
}

function showModalInvalid() {
  const modalTitle = document.querySelector('#view-modal .modal-title');
  const modalBody = document.querySelector('#view-modal .modal-body');
  boostrapModal.show();
  modalBody.innerText = 'Hay errores en el formulario.';
  modalTitle.innerText = `ERROR`;
}
