const phone = (
  value,
  prefix,
  digitsNumber = 7,
  errorMessage = 'El número debe inciar con el prefijo {{prefix}} y contener {{digitsNumber}} dígitos'
) => {
  const regexp = `^${prefix}\\d{${digitsNumber}}$`;
  if (new RegExp(regexp).test(value)) {
    return true;
  } else {
    throw errorMessage
      .replace('{{prefix}}', prefix)
      .replace('{{digitsNumber}}', digitsNumber + String(prefix).length);
  }
};
