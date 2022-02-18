const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');

const buttonBox1 = document.getElementById('button-box1');
const buttonBox2 = document.getElementById('button-box2');
const buttonBox3 = document.getElementById('button-box3');
const buttonBox4 = document.getElementById('button-box4');

buttonBox1.addEventListener('click', (event) => {
  box1.style.background = event.target.value;
});

buttonBox2.addEventListener('click', (event) => {
  box2.style.background = event.target.value;
});

buttonBox3.addEventListener('click', (event) => {
  box3.style.background = event.target.value;
});

buttonBox4.addEventListener('click', (event) => {
  box4.style.background = event.target.value;
});
