'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length < 1) {
    return array;
  }
  let pivot = array[Math.floor(Math.random() * array.length)];
  let left = [];  //Todos los elementos menores a pivot
  let right = []; //Todos los elementos mayores a pivot
  let equals = [];  //Pivote y cualquier número que sea igual

  for (let i = 0; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i]);
    }else if(array[i] > pivot){
      right.push(array[i])
    }else{
      equals.push(array[i]);
    }
  }
  return quickSort(left).concat(equals).concat(quickSort(right));
}

function merge(left, right) {
  var result = [],
      il = 0,
      ir = 0;
  //il, ir indices de los arrays
  //recorremos los arrays hasta que lleguemos al final de uno
  while(il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
      //si el item del array left es menor
      //este se agrega a la lista y se aumenta en uno su indice (il)
    } else {
      //si el item de right es menor este se agrega a la lista e igualmente su indice crece
      result.push(right[ir++]);
    }
  }
  return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) {
    return array;
  }
  var middle = Math.floor(array.length / 2),
      left = array.slice(0, middle),
      right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
  //okey probemos ahora
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
