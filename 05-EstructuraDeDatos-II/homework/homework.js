'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(value){
    const nuevoNodo = new Node(value);
    if(!this.head){
      this.head = nuevoNodo;
    }
    else
    {
      let current = this.head;
      while(current.next)
      {
        current = current.next;
      }
      current.next = nuevoNodo;
    }
//  if(this.head === null)
//  {
//    this.head = value
//    return 'Primer Nodo.';
//  }
//  let current = this.head;
//  while(current.next !== null)
//  {
//    current = current.next;
//  }
//  current.next = value;
//  return current;
};
LinkedList.prototype.remove = function(){
  //Cuando la lista está vacía
  if (!this.head) return null;
  //Cuando la lista sólo tiene un elemento, sólo tiene "head" sin nodo "next"
  if(!this.head.next) 
  {
    const value = this.head.value;
    this.head = null;
    return value;
  }
  //Cuando la lista tiene varios elementos, se iguala a current al penúltimo elemento
  let current = this.head;
  while(current.next.next)  //Si hay 2 elementos adelante, se inserta un elemento
  {
    current = current.next;
  }
  //Cuando se elimina el último elemento
  const value = current.next.value;
  //Significa que current.next.next === null
  current.next = null;
  return value;
};
LinkedList.prototype.search = function(value){
  if(!this.head) return null; //Lista vacía
  if(typeof value === "function") //En caso de que "value" sea una "function"
  {
    if(value(this.head.value)) return this.head.value;
  }
  else
  {
    if(this.head.value === value) return this.head.value; //Elemento único en la lista.
  }
  
  //Elemento no es el valor buscado
  let current = this.head;
  while(current.next){
    current = current.next;
    if(typeof value === "function") //En caso de que "value" sea una "function"
  {
    if(value(current.value)) return current.value;
  }
  else
  {
    if(current.value === value) return current.value; //Retorna el valor del elemento buscado
  }
  }
  return null;  //No encontro el valor
};

function Node(value) {
  this.value = value;
  this.next = null;
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable(buckets) {
  this.numBuckets = buckets || 35;
  this.data = new Array(this.numBuckets);
}

HashTable.prototype.set = function(key, value) {
  if(typeof key !== "string") throw new TypeError('Keys must be strings');
  const bucket = this.hash(key);
  if(!this.data[bucket])
  {
    this.data[bucket] = {}
  }
  this.data[bucket][key] = value;
};
HashTable.prototype.get = function(key) {
  const bucket = this.hash(key);
  if(this.data[bucket]) return this.data[bucket][key];
  return undefined;
};
HashTable.prototype.hasKey = function(key) {
  const bucket = this.hash(key);
  if(this.data[bucket]) return this.data[bucket].hasOwnProperty(key);
  return false;
};
HashTable.prototype.hash = function(key) {
  let code = 0;
  for(let i = 0; i < key.length; i++)
  {
    code += key.charCodeAt(i);
  }
  return code % this.numBuckets;
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
