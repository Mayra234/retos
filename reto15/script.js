const inputAge = document.getElementById('age');
const message = document.getElementById('message');

inputAge.addEventListener('input', showMessageAge);

function showMessageAge() {
  if (inputAge.value < 18) {
    message.innerText = 'Eres menor de edad';
  } else if (inputAge.value >= 18 && inputAge.value < 60) {
    message.innerText = 'Eres mayor de edad';
  } else if (inputAge.value >= 60) {
    message.innerText = 'Eres de la tercera edad';
  }
}
