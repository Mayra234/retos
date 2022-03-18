const identification = (
  value,
  digitsNumber = 10,
  errorMessage = 'El número debe contener {{digitsNumber}} dígitos'
) => {
  const regexp = `^\\d{8,10}$`;
  if (new RegExp(regexp).test(value)) {
    return true;
  } else {
    throw errorMessage.replace('{{digitsNumber}}', digitsNumber);
  }
};
