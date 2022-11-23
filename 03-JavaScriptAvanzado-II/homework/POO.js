/*
# Todo es un objeto en JavaScript (o una primitiva)

## Construyendo Objetos
Ahora que conocemos el prototipado, la cadena cadena de prototipos,

 Mucho cuidado con confundirse la propiedad prototype con el \_\_proto\_\_ de un 
 objeto. No es lo mismo, prototype es simplemente el nombre que , unfortunadamente, 
 eligieron para esa propiedad.

Por lo tanto, todo lo que pongamos dentro de la propiedad `prototype` de la función 
constructora, va a ser _heredado_ por los objetos creados usando está función con 
`new`. Por ejemplo:
*/
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 43
  }
}

// function Persona (nombre, apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = 43
// }
Persona.prototype.darmeEdad = function(){
    return this.edad
}

console.log("------>",Persona) // [class Persona]
/*
Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  getNombre(){}
  otro(){}
}

*/


Persona.prototype.getNombre = function () {
  return "Hola " + this.nombre + " " + this.apellido;
};
Persona.prototype.otro = function () {
    return "chau" 
  };

var jan = new Persona("Jan", "Lopez");
console.log(jan);
console.log(jan.darmeEdad())

const obj = { a: "er" };
console.log(Object.keys(obj));






// Obj e insertar métodos


const uhu = {
    a:1,
    b:2
}
function yeye (){
    this.a = 21
    return this.a
}
const result = yeye.call(uhu)
console.log(result)
console.log(uhu)
const re = {}
// const re = {  __proto__
//     Object: keys:function(){}
//        etc...
// }