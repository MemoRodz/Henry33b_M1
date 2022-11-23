// var nombre = "pepe"
// const persona = {
//     edades: {
//         mayores:{

//         },
//         menores:{

//         }

//     },
//     nombre: 'Juan',
//     saluda: function () {
//         return "Hola, soy " + this.nombre
//     },
//     limpia: function (cosa) {
//         return "soy " + this.nombre + " y limpio " + cosa;
//     }
// };

// console.log(persona.saluda());

// el primer parametro de bind es el this!
// BIND DEVUELVE UNA FUNCION!
	
var persona = {
	nombre: 'Guille',
	apellido: 'Aszyn',
}
 
function log (){
    return this.nombre
}
// const bind_is_function = log.bind(persona)
// console.log(bind_is_function)
// console.log(bind_is_function())
console.log(log.bind(persona))
console.log(log.call(persona))

/*
var persona = {
	nombre: 'Guille',
	apellido: 'Aszyn',
    log: function (){
           return this.nombre
                 }
}
*/


// CALL y APPLY DEVUELVEN EL VALOR 

var logNombre = function(arg1, arg2){
	return arg1 +' '+ this.nombre +' '+ arg2;
}
 
console.log(logNombre.call(persona, 'Hola, ', 'Cómo estas?'));

// Apply 
var logNombre2 = function(arg1, arg2){
	return arg1 +' '+ this.nombre +' '+ arg2;
}
const result = logNombre2.apply(persona, ['Hola', ', Cómo estas?'])
console.log(result);

/*
Bind Call apply

function unafunction(1,2,3){}

                  this
unafunction.call(  obj , 1,2,3 )

unafunction.apply(  obj , [1,2,3] )
*/