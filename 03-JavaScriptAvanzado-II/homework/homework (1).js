"use strict";
// free = 56
// console.log(free)

// Closures

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar 
como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
1 function retorna otra function <-- enlaza --> variable (dato) en entrono de la 
funcion padre
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() {
  var count = 0;
  return function (sumres) {
    if (sumres === "+") {
      count++;
      console.log(count);
      return count;
    }
    if (sumres === "-") {
      count--;
      console.log(count);
      return count;
    }
  };
}
const play1_count = counter();
console.log(play1_count("+")); // function(){count++ return count}
console.log(play1_count("+"));
console.log(play1_count("-"));

const play2_count = counter();
console.log(play2_count("+"));

/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; 
hecho eso, debe guardar el argumento junto con el resultado de la invocación 
(tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado 
  de la correspondiente invocación a cb) de manera que, la próxima vez que reciba 
  el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado 
  estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 
  
   const pepe = function(x) {
   return x * 2;
 };
  cacheFunction(pepe)
  */

function cacheFunction(cb) {
  const cache = {};
  return function (num) {
    if (!cache.hasOwnProperty(num)) {
      cache[num] = cb(num);
      cache.mauro = "hola"
      console.log("in")
    }
    return cache[num];
  };
}
const pepe = function (x) {
  return x * 2;
};
const plantilla1 = cacheFunction(pepe);
console.log(plantilla1(7));
console.log(plantilla1(4));
console.log(plantilla1(2));
console.log(plantilla1(2));
console.log(plantilla1(2));
console.log(plantilla1(22));
//----------------------------------------

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
  // getNombre:function(){
  //   return this.nombre;
  // }
};

function getNombre() {
  // <- bug 1
  return this.nombre;
}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, 
  y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, 
  dos funciones que actúen como getNombre pero retornen el nombre del instructor y 
  del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
console.log(getNombreInstructor())
let getNombreAlumno = getNombre.bind(alumno);
console.log(getNombreAlumno())
/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres 
  variables declaradas a continuación, tres funciones que retornen una cadena 
  (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, 
  respectivamente). Las funciones obtenidas deberían recibir solamente un argumento 
  - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/
// BIND --> f()
// CALL --> Value

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  // <- bug2
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}
console.log(crearCadena("*","*","hola mundo"))

let textoAsteriscos = crearCadena.bind(null,"*","*");
console.log(textoAsteriscos("Hola"))
let textoGuiones = crearCadena.bind(null,"-","-");
let textoUnderscore = crearCadena.bind(null,"_","_");


function crearCadena2(delIzq, delD){
  return function(str){
    return delIzq + str + delD;
  }
}
const inst_crear2 = crearCadena2("+ "," +")
console.log(inst_crear2("bye bye"))

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};

// Example del uso de hasOwnProperty
const obj_test = {
  2: 4,
  3: 6,
  4: 8,
};
obj_test[54]= 43
console.log(obj_test.hasOwnProperty(3));
// Otra manera sería
function search_key_in_obj(obj, num) {
  for (const key in obj) {
    console.log(key);
    if (key === num.toString()) {
      return true;
    }
  }
  return false;
}
console.log(search_key_in_obj(obj_test, 2));
