const buttonDisable = document.getElementById('button-disable');
const selectColorBox = document.getElementById('select-color-box');
const box = document.getElementById('box');
const ENABLE_TEXT = 'Habilitar';
const DISABLE_TEXT = 'Deshabilitar';

buttonDisable.addEventListener('click', () => {
  if (buttonDisable.innerText == 'Habilitar') {
    selectColorBox.disabled = false;
    buttonDisable.innerText = DISABLE_TEXT;
  } else if (buttonDisable.innerText == 'Deshabilitar') {
    selectColorBox.disabled = true;
    buttonDisable.innerText = ENABLE_TEXT;
  }
});

selectColorBox.addEventListener('change', changeColorBox);

function changeColorBox(event) {
  box.style.background = event.target.value;
}
