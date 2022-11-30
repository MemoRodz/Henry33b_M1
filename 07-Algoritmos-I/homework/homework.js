'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let numeros = [1]; //Siempre empezamos con 1 porque el primer divisor o factor de num es 1.
  let divisor = 2;
  //Cuando llegué el resto a 1
  while(num > 1){
    if(num % divisor === 0)
    {
      numeros.push(divisor);
      num = num / divisor;
    }
    else
    {
      divisor++;
    }
  }
  return numeros;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  const l = array.length;
  for (let i = 0; i < l; i++ ) {
    for (let j = 0; j < l - 1 - i; j++ ) {
      if ( array[ j ] > array[ j + 1 ] ) {
        [ array[ j ], array[ j + 1 ] ] = [ array[ j + 1 ], array[ j ] ];
      }
    }
  }

  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  const l = array.length;
  let j, temp;

  for ( let i = 1; i < l; i++ ) {
    j = i;
    temp = array[ i ];
    while ( j > 0 && array[ j - 1 ] > temp ) {
      array[ j ] = array[ j - 1 ];
      j--;
    }
    array[ j ] = temp;
  }

  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for ( let j = 0; j < array.length; ++j ) {
    let iMin = j;
    let i = iMin;
    for ( ++i; i < array.length; ++i ) {
      ( array[ i ] < array[ iMin ] ) && ( iMin = i );
    }
    [ array[ j ], array[ iMin ] ] = [ array[ iMin ], array[ j ] ];
  }
console.log(array);
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
