const identification = (
  value,
  digitsNumber = 10,
  errorMessage = 'El número debe contener {{digitsNumber}} dígitos'
) => {
  const regexp = `^$\\d+$`;
  if (new RegExp(regexp).test(value)) {
    return true;
  } else {
    throw errorMessage.replace('{{digitsNumber}}', digitsNumber);
  }
};
