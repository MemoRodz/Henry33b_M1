/*
 <= izqu
[10, 7, 12, 11, 9, 8, 1, 15]

            (10)        nivel 0 
          /      \
        (7)      (12)      menor a la izquierda y mayor o igual a Derecha 
       /  \      /  \
     (1)   (9)  (11) (15)  
          /      
       (8)             nivel 3 <- es la profundidad del árbol
    
Pre-order   VLR -> value left rigth
["10", 7, 1, 9, 8, 12, 11, 15]

In-order    LVR -> left value rigth
[1, 7, 8, 9, "10", 11, 12, 15]

Post-order  LRV -> left rigth value
[1, 8, 9, 7, 11, 15, 12, "10"]

*/

function BST(value){
    this.root = value
    this.left = null
    this.right = null
}

function Node(value){
    this.value = value
    this.left = null
    this.right = null
}
const data = [10, 7, 12, 11, 9, 8, 1]
const arbolito = new BST(10)
BST.prototype.add = function(){}
const node1 = new Node(data[1])
const node2 = new Node(data[2])
const node3 = new Node(data[3])
const node4 = new Node(data[4])
const node5 = new Node(data[5])
const node6 = new Node(data[6])
const node7 = new Node(data[7])
// console.log(node1)
arbolito.left = node1
arbolito.right = node2
arbolito.right.left = node3
arbolito.left.right = node4
arbolito.left.right.left = node5
arbolito.left.left = node6
console.log(arbolito)

/*
BST { root: 10,
      left: { value: 7,
              left: { value: 1, 
                      left: null, 
                      right: null },
              right: { value: 9,          
                       left: { value: 8,    RECURSIÓN
                               left: null, 
                               right: null },
                      right: null } },
      right: { value: 12,
               left: { value: 11, 
                       left: null, 
                       right: null },
               right: null } }
*/
function search(obj){
    for (const key in object) {
     
            // if sos un objeto search(obj)
        }
    
}



function Tree(value){
    this.value = value
    this.left = null
    this.right = null
}
const arbol = new Tree(7)
const nod1 = new Tree(3)
const nod2 = new Tree(3)

arbol.left = nod1

function List(value){
    this.next=null
    this.value=value
}
