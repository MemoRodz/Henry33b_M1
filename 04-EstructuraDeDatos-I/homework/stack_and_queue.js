var arreglo = [1,2,3,3,4,4,1,2]
// arreglo tiene un index que nos sirve para poder acceder a elementos (data)
// que se encuentra almacenada en diferentes lugares del arreglo
console.log(arreglo[3])
console.log(arreglo.length)
console.log(arreglo.pop())
console.log(arreglo)

var set1 = new Set(arreglo)
console.log(set1)

console.log(set1.size)
console.log(set1.add(67))


const stack_products = {}
function agrega_en_modelo_de_stack (arr){
    stack_products[arr[0]]=arr
}
function extrae_en_modelo_de_stack (){
    for (const key in stack_products) {
        var k = key
        var v = stack_products[key]
        }
    return k  + ":" + v
}
agrega_en_modelo_de_stack(["v",1,2])
agrega_en_modelo_de_stack(["w"])
agrega_en_modelo_de_stack(["d",8,7])

// extrae_en_modelo_de_stack()
console.log(extrae_en_modelo_de_stack())
console.log(stack_products)




// Estructuras de datos las vamos a hacer con Clases 
// y las Stack y las Queue generalmente como contenedor de toda la data
// vamos a usar []

class Personas {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido
    }
    // saludar(){
    // return "hola " + this.nombre
    // }
}

Personas.prototype.saludar = function(){
    return "hola " + this.nombre
}

console.log(Personas)
const juan = new Personas("Juan", "Perez")
console.log(juan)
const luis = new Personas("Luis", "Miguel")
console.log(luis)
console.log(luis.saludar())

function Stack (){
    this.array_stack = []
}
Stack.prototype.add = function(obj){
    this.array_stack.push(obj)
    return this.array_stack
}
Stack.prototype.remove = function(){
    this.array_stack.pop()
    return this.array_stack
}




console.log(Stack)
const stack1 = new Stack()
stack1.add({a:1})
stack1.add({b:31})
stack1.add({c:41})
stack1.remove()
console.log(stack1)
console.log(stack1.array_stack)



