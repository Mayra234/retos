const colorOptions = document.getElementById('backgroud');
const colorText = document.querySelector('#text');
const frame = document.getElementById('frame');

colorOptions.addEventListener('change', colorDiv);
colorText.addEventListener('change', colorOptionsText);

function colorDiv(event) {
  frame.style.background = event.target.value;
}

function colorOptionsText(event) {
  frame.style.color = event.target.value;
}
