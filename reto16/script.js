const firstName = document.getElementById('first-name');
const button = document.getElementById('button');

firstName.addEventListener('input', validateField);

function validateField(event) {
  if (event.target.value !== '') {
    firstName.className = 'form-control is-valid';
    button.disabled = false;
  } else {
    firstName.className = 'form-control is-invalid';
    button.disabled = true;
  }
}
