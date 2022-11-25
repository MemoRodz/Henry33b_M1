'use strict';
/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

// EJERCICIO 1
function nFactorial(n) {
   
      if (n === 0)
      {
         return 1;
      }
      else if (n <= 0)
      {
         return 'El número tiene que ser entero positivo.'
      }
      else 
      {
         return n * nFactorial(n-1);
      }
}


// EJERCICIO 2
function nFibonacci(n) {
   if( n < 2) return n;

   return nFibonacci(n - 1) + nFibonacci(n -2);
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, 
donde el primer elemento que ingresa es el primero que se quita. 
Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. 
             Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

// EJERCICIO 3
function Queue() {
   this.arreglo_pila = [];
   /*
   Con funciones internas:

   this.enqueue = function(valor){
      this.arreglo_pila.push(valor);
   };
   this.dequeue = function(){
      return this.arreglo_pila.shift();
   };
   this.size = function(){
      return this.arreglo_pila.length;
   };
   */
   /*
   URL's de consulta para ideas de resolución:
   https://parzibyte.me/blog/2019/08/13/javascript-eliminar-elemento-arreglo/
   https://www.youtube.com/watch?v=bc1V6XFpUlY&t=76s
   
   */
}
// Funciones externas creadas en el PROTOTIPO
Queue.prototype.enqueue = function(valor) {this.arreglo_pila.push(valor);};
Queue.prototype.dequeue = function() {return this.arreglo_pila.shift();};
Queue.prototype.size = function() {return this.arreglo_pila.length;};
const instanciaDeQueue = new Queue();

// Revisión en Consola
console.log(nFactorial(3));
console.log(nFibonacci(3));
console.log(Queue);
console.log(instanciaDeQueue);
console.log(instanciaDeQueue.enqueue({a:3}));
console.log(instanciaDeQueue.enqueue({b:3}));
console.log(instanciaDeQueue.dequeue());
console.log(instanciaDeQueue.size());
//console.log(Queue.enqueue('first in line'));
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
