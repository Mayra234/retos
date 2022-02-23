const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box4 = document.getElementById('box-4');
const box5 = document.getElementById('box-5');
const box6 = document.getElementById('box-6');
const box7 = document.getElementById('box-7');
const box8 = document.getElementById('box-8');
const box9 = document.getElementById('box-9');
const box10 = document.getElementById('box-10');
const box11 = document.getElementById('box-11');
const box12 = document.getElementById('box-12');
const box13 = document.getElementById('box-13');
const box14 = document.getElementById('box-14');
const box15 = document.getElementById('box-15');
const box16 = document.getElementById('box-16');

box1.addEventListener('mouseenter', showColorEnterBox1);
box1.addEventListener('mouseleave', showColorLeaveBox1);

box2.addEventListener('mouseenter', showColorEnterBox2);
box2.addEventListener('mouseleave', showColorLeaveBox2);

box3.addEventListener('mouseenter', showColorEnterBox3);
box3.addEventListener('mouseleave', showColorLeaveBox3);

box4.addEventListener('mouseenter', showColorEnterBox4);
box4.addEventListener('mouseleave', showColorLeaveBox4);

box5.addEventListener('mouseenter', showColorEnterBox5);
box5.addEventListener('mouseleave', showColorLeaveBox5);

box6.addEventListener('mouseenter', showColorEnterBox6);
box6.addEventListener('mouseleave', showColorLeaveBox6);

box7.addEventListener('mouseenter', showColorEnterBox7);
box7.addEventListener('mouseleave', showColorLeaveBox7);

box8.addEventListener('mouseenter', showColorEnterBox8);
box8.addEventListener('mouseleave', showColorLeaveBox8);

box9.addEventListener('mouseenter', showColorEnterBox9);
box9.addEventListener('mouseleave', showColorLeaveBox9);

box10.addEventListener('mouseenter', showColorEnterBox10);
box10.addEventListener('mouseleave', showColorLeaveBox10);

box11.addEventListener('mouseenter', showColorEnterBox11);
box11.addEventListener('mouseleave', showColorLeaveBox11);

box12.addEventListener('mouseenter', showColorEnterBox12);
box12.addEventListener('mouseleave', showColorLeaveBox12);

box13.addEventListener('mouseenter', showColorEnterBox13);
box13.addEventListener('mouseleave', showColorLeaveBox13);

box14.addEventListener('mouseenter', showColorEnterBox14);
box14.addEventListener('mouseleave', showColorLeaveBox14);

box15.addEventListener('mouseenter', showColorEnterBox15);
box15.addEventListener('mouseleave', showColorLeaveBox15);

box16.addEventListener('mouseenter', showColorEnterBox16);
box16.addEventListener('mouseleave', showColorLeaveBox16);

function showColorEnterBox1() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box1.style.background = 'blue';
  } else if (randomColor == 1) {
    box1.style.background = 'yellow';
  } else if (randomColor == 2) {
    box1.style.background = 'red';
  }
}

function showColorLeaveBox1() {
  box1.style.background = 'gray';
}

function showColorEnterBox2() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box2.style.background = 'blue';
  } else if (randomColor == 1) {
    box2.style.background = 'yellow';
  } else if (randomColor == 2) {
    box2.style.background = 'red';
  }
}

function showColorLeaveBox2() {
  box2.style.background = 'gray';
}

function showColorEnterBox3() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box3.style.background = 'blue';
  } else if (randomColor == 1) {
    box3.style.background = 'yellow';
  } else if (randomColor == 2) {
    box3.style.background = 'red';
  }
}

function showColorLeaveBox3() {
  box3.style.background = 'gray';
}

function showColorEnterBox4() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box4.style.background = 'blue';
  } else if (randomColor == 1) {
    box4.style.background = 'yellow';
  } else if (randomColor == 2) {
    box4.style.background = 'red';
  }
}

function showColorLeaveBox4() {
  box4.style.background = 'gray';
}

function showColorEnterBox5() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box5.style.background = 'blue';
  } else if (randomColor == 1) {
    box5.style.background = 'yellow';
  } else if (randomColor == 2) {
    box5.style.background = 'red';
  }
}

function showColorLeaveBox5() {
  box5.style.background = 'gray';
}

function showColorEnterBox6() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box6.style.background = 'blue';
  } else if (randomColor == 1) {
    box6.style.background = 'yellow';
  } else if (randomColor == 2) {
    box6.style.background = 'red';
  }
}

function showColorLeaveBox6() {
  box6.style.background = 'gray';
}

function showColorEnterBox7() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box7.style.background = 'blue';
  } else if (randomColor == 1) {
    box7.style.background = 'yellow';
  } else if (randomColor == 2) {
    box7.style.background = 'red';
  }
}

function showColorLeaveBox7() {
  box7.style.background = 'gray';
}

function showColorEnterBox8() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box8.style.background = 'blue';
  } else if (randomColor == 1) {
    box8.style.background = 'yellow';
  } else if (randomColor == 2) {
    box8.style.background = 'red';
  }
}

function showColorLeaveBox8() {
  box8.style.background = 'gray';
}

function showColorEnterBox9() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box9.style.background = 'blue';
  } else if (randomColor == 1) {
    box9.style.background = 'yellow';
  } else if (randomColor == 2) {
    box9.style.background = 'red';
  }
}

function showColorLeaveBox9() {
  box9.style.background = 'gray';
}

function showColorEnterBox10() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box10.style.background = 'blue';
  } else if (randomColor == 1) {
    box10.style.background = 'yellow';
  } else if (randomColor == 2) {
    box10.style.background = 'red';
  }
}

function showColorLeaveBox10() {
  box10.style.background = 'gray';
}

function showColorEnterBox11() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box11.style.background = 'blue';
  } else if (randomColor == 1) {
    box11.style.background = 'yellow';
  } else if (randomColor == 2) {
    box11.style.background = 'red';
  }
}

function showColorLeaveBox11() {
  box11.style.background = 'gray';
}

function showColorEnterBox12() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box12.style.background = 'blue';
  } else if (randomColor == 1) {
    box12.style.background = 'yellow';
  } else if (randomColor == 2) {
    box12.style.background = 'red';
  }
}

function showColorLeaveBox12() {
  box12.style.background = 'gray';
}

function showColorEnterBox13() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box13.style.background = 'blue';
  } else if (randomColor == 1) {
    box13.style.background = 'yellow';
  } else if (randomColor == 2) {
    box13.style.background = 'red';
  }
}

function showColorLeaveBox13() {
  box13.style.background = 'gray';
}

function showColorEnterBox14() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box14.style.background = 'blue';
  } else if (randomColor == 1) {
    box14.style.background = 'yellow';
  } else if (randomColor == 2) {
    box14.style.background = 'red';
  }
}

function showColorLeaveBox14() {
  box14.style.background = 'gray';
}

function showColorEnterBox15() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box15.style.background = 'blue';
  } else if (randomColor == 1) {
    box15.style.background = 'yellow';
  } else if (randomColor == 2) {
    box15.style.background = 'red';
  }
}

function showColorLeaveBox15() {
  box15.style.background = 'gray';
}

function showColorEnterBox16() {
  const randomColor = Math.floor(Math.random() * 3);

  if (randomColor == 0) {
    box16.style.background = 'blue';
  } else if (randomColor == 1) {
    box16.style.background = 'yellow';
  } else if (randomColor == 2) {
    box16.style.background = 'red';
  }
}

function showColorLeaveBox16() {
  box16.style.background = 'gray';
}
