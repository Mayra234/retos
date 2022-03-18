const maxCharacter = (
  value,
  max,
  errorMessage = 'Este campo debe tener maxímo {{max}} caracteres'
) => {
  const regexp = `^\\w{1,${max}}$`;
  if (new RegExp(regexp).test(value)) {
    return true;
  } else {
    throw errorMessage.replace('{{max}}', max);
  }
};
