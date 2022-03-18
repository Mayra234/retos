const person = {
  firstName: { message: '', isInValid: false },
  secondName: { message: '', isInValid: false },
  phone: { message: '', isInValid: false },
  city: { message: '', isInValid: false },
};

function tieneErrores(entidad) {
  for (let key in entidad) {
    if (entidad[key].isInValid) {
      return true;
    }
  }
  return false;
}

console.log(tieneErrores(person));

const muebles = ['mesa', 'sila', 'sofá'];
// ejemplo 1: cuando se utiliza in en un array el valor iterado en el indice de la posicion
for (let index in muebles) {
  //console.log(muebles[index])
}
// cuando se utiliza of en una array el valor iterado es el valor de la posicion
for (let mueble of muebles) {
  console.log(mueble);
}
/**
20 ejercicios de ciclos
iterar un array de string (5)
 - mascotas
 --- si es x mascota rompen ciclo
 - frutas
 ---
 - lo que quiera
 ---

iterar un array de números (5)
- si son pares omiten la iteración (continue)
- si son impares omiten la iteración 
- si es un numero x break

array de booleanos (5)
- verificar si un valor es false suspenden el ciclo de lo contrario despues del ciclo retorne true

array de objetos (5)
-ciclo con objeto persona 
- objeto animal
- una de las propiedades del objeto animal
- una de las propiedades del objeto persona



ciclo sobre un objeto animal
-ciclo con las propiedades del animal 
-ciclo con los valores del animal

ciclo sobre un objeto prenda 
-ciclo con las propiedades del prenda
-ciclo con los valores del prenda

ciclo sobre un objeto medicamento 
-ciclo con las propiedades del medicamento
-ciclo con los valores del medicamento

2 objetos más
*/
