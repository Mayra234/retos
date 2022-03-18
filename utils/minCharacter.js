const minCharacter = (
  value,
  min = 2,
  messageError = 'Este campo debe contener mínimo {{min}} caracteres'
) => {
  const regexp = `^\\w{${min},}$`;
  if (new RegExp(regexp).test(value)) {
    return true;
  } else {
    throw messageError.replace('{{min}}', min);
  }
};
