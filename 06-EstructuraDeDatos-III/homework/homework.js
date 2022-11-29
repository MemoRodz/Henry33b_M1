'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

//Nodos tipo hojas 
//0001, 0011, 0031, 0034

//Nodos con un sólo hijo
//0000, 0001, 0012, 0013, 0014, 0030, 0017, 0021,  
class BinarySearchTree {
   constructor(value){
      this.value = value;
      this.right = null;
      this.left = null;
   };

   size(){
      if(!this.left && !this.right)
      {
         return 1;
      }
      if(!this.left)
      {
         //regresa contador SIZE++ y llamar a la derecha
         return 1 + this.right.size();
      }
      if(!this.right){
         return 1 + this.left.size();
      }
      return 1 + this.left.size() + this.right.size();
   };

   insert(value){
      if(value >= this.value) //Tu lo tenías ">" en Code Review se modificó
      {
         if(!this.right)
         {
            this.right = new BinarySearchTree(value);
         }
         else
         {
            this.right.insert(value);
         }
      }
      else 
      {
         if(!this.left)
         {
            this.left = new BinarySearchTree(value);
         }
         else
         {
            this.left.insert(value);
         }
      }
   };

   contains(value){
      if(this.value === value)
      {
         return true;
      }
      if(value > this.value)
      {
         if(!this.right)
         {
            return false;
         }
         else 
         {
             return this.right.contains(value);
         }
      }
      else
      {
         if(!this.left)
         {
            return false;
         }
         else 
         {
            return this.left.contains(value);
         }
      }
   };

   depthFirstForEach(cb, order){
      //in-order
      if(!order || order === 'in-order')
      {
         this.left && this.left.depthFirstForEach(cb, order)
         cb(this.value)
         this.right && this.right.depthFirstForEach(cb, order)
      } else if(order === 'post-order')
      {
         // post order
         this.left && this.left.depthFirstForEach(cb, order)
         this.right && this.right.depthFirstForEach(cb, order)
         cb(this.value)
      }
      else
      {
         //Pre-order
         cb(this.value)
         this.left && this.left.depthFirstForEach(cb, order)
         this.right && this.right.depthFirstForEach(cb, order)
      }
   };

   breadthFirstForEach(cb, array_queue = []){
      if(this.left)
      {
         array_queue.push(this.left)
      }
      if(this.right)
      {
         array_queue.push(this.right)
      }
      cb(this.value)
      if(array_queue.length > 0)
      {
         array_queue.shift().breadthFirstForEach(cb,array_queue)
      }
   };


}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
