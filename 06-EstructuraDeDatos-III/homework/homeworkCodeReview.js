"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente -> BST izqu-  der+
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro 
  del árbol

  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en 
  cualquiera de sus variantes, según se indique por parámetro 
  ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, 
  hará el recorrido "in-order" por defecto.
  por params le pas una cb y el order
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen 
  bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
/*                                             contains 20
                   10 -> 1                      10
                null   15  -> 1    2          8   15
                    null null             {value:8, l:null, r:null}.insert(4)
                                           4
*/
// insert node según BST
BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    // <=
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.left === null && this.right === null) {
    // (!this.left && !this.right)
    return 1;
  }
  if (!this.left) return 1 + this.right.size();
  if (!this.right) return 1 + this.left.size();
  if (this.right && this.left) return 1 + this.left.size() + this.right.size();
};
BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;
  if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else {
    // <=
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};
// In-order    LVR -> left value rigth
// testArr = [];
// depthFirstForEach(function(val){ testArr.push(val); })
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  // in order
  if (!order || order === "in-order") {
    this.left && this.left.depthFirstForEach(cb, order);
    cb(this.value);
    this.right && this.right.depthFirstForEach(cb, order);
  } else if (order === "post-order") {
    // post order
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
    cb(this.value);
  } else {
    // Pre-order
    cb(this.value);
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
  }
};
// if(this.left !== null){this.left.depthFirstForEach(cb,order)}

/*
var array_result = [20,15,25,5];
tree.breadthFirstForEach(function(val){ array_result.push(val); }

En la recursión los datos que creamos y pasamos por params persisten
array_queue
*/

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array_queue = []) {
  if (this.left) {
   array_queue.push(this.left)
  }
  if (this.right) {
   array_queue.push(this.right)
  }
  cb(this.value);
  if(array_queue.length>0){
   console.log("------> ", array_queue)
   array_queue.shift().breadthFirstForEach(cb,array_queue) // <-
  }
};
/*
Steps
1 array_queue 
[]

{v: 15,l: { v: 5,l: null, r: null }r: null }.breadthFirstForEach

{ v: 25, l: null, r: null } }.breadthFirstForEach

{ v: 5,l: null, r: null }.breadthFirstForEach

input -> [20 15 25 5]
BinarySearchTree { value: 20,
                   left: { value: 15,
                           left: { value: 5, 
                                   left: null, 
                                   right: null },
                           right: null },
                   right: { value: 25, 
                            left: null, 
                            right: null } }
                            20
                       15       25
                     5   
   breadthFirstForEach
   -> array_queue = [{15}{25}{5}{17}{}{}]
       
  --> array_result = [20, 15, 25, 5, 17] 
*/
const arbolito = new BinarySearchTree(20);
const node1 = new BinarySearchTree(15);
const node2 = new BinarySearchTree(25);
const node3 = new BinarySearchTree(5);
const node4 = new BinarySearchTree(17);
arbolito.left = node1; // arbolito.left = new BinarySearchTree(15);
arbolito.right = node2;
arbolito.left.left = node3;
arbolito.left.right = node4;
console.log(node1);
console.log(arbolito);
/*
BinarySearchTree.prototype .depthFirstForEach = function(){}

considerar -> function(val){ testArr.push(val); }
*/
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
