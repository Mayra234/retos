const formAvatar = document.getElementById('form-avatar');
const nameAvatar = document.getElementById('name');
const emailAvatar = document.getElementById('email');
const photoAvatar = document.getElementById('photo');
const containerAvatar = document.getElementById('container-avatar');
const showImgAvatar = document.getElementById('show-img-avatar');
const showNameAvatar = document.getElementById('show-name-avatar');
const showEmailAvatar = document.getElementById('show-email-avatar');

nameAvatar.addEventListener('input', writeInputFieldName);
function writeInputFieldName() {
  showNameAvatar.innerText = nameAvatar.value;
}

emailAvatar.addEventListener('input', writeInputFieldEmail);
function writeInputFieldEmail() {
  showEmailAvatar.innerText = emailAvatar.value;
}

photoAvatar.addEventListener('change', showPhoto);
function showPhoto(event) {
  showImgAvatar.innerHTML = `<img src="${event.target.value}">`;
}
