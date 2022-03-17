const person = {
  firstName: '',
  secondName: '',
  age: '',
  phone: '',
  city: '',
};

const fields = document.querySelectorAll('#form-person .form-field');
const submitButton = document.querySelector('#form-person button');

const modalHtmlElement = document.getElementById('view-modal');
const boostrapModal = new bootstrap.Modal(modalHtmlElement);

const validationsSchema = {
  firstName: [
    (value) => required(value, 'El primer nombre es requerido'),
    singleWorld,
  ],
  secondName: [
    (value) => required(value, 'El segundo nombre es requerido'),
    singleWorld,
  ],
  age: [required, number, (value) => min(value, 10), (value) => max(value, 99)],
  phone: [required, (value) => phone(value, 601)],
  city: [required],
};

const errors = {};

fields.forEach((field) => {
  field.addEventListener('input', (event) => setFieldValue(event, person));
  field.addEventListener('blur', (event) => setFieldValue(event, person));
  errors[field.name] = { message: '', isInvalid: true };
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
        Nombres: ${person.firstName} ${person.secondName}
        Edad: ${person.age}
        Número teléfonico: ${person.phone}
        Ciudad: ${person.city}
  `;
  modalTitle.innerText = `Datos ingresados`;
}
