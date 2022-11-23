


/*
Una clousure es una funcion que tiene acceso a variables de su contexto donde se 
definio.		
Para que exista una clousure se deben cumplir tres condiciones:		
1. La funcion debe estar dentro de una funcion (funciones anidadas).
2. La funcion padre debe tener una variable.
3. La funcion que está dentro debe interactuar con la variable de la funcion padre 
que está fuera de ella.
*/
	
function saludar( saludo ){
	return function( nombre ){
		console.log(saludo + ' ' + nombre);
	}
}
 
var saludarHola = saludar('Hola'); //  function( nombre ){console.log('Hola' + ' ' + nombre);}
var saludarDespedida = saludar('Chau') 
saludarHola('Toni'); // 'Hola Toni'

saludarDespedida("Mauro")
saludarDespedida("Pepe")


function incrementar() {
    var count = 101
    return function(){
        count++
        return count
    }
}

const instance_one = incrementar() // -> count = 101
const instance_two = incrementar() // -> count = 101
console.log(instance_one())
console.log(instance_one())
console.log(instance_one())
console.log(instance_one())


console.log(instance_two())



	
function creaFuncion(){
	var arreglo = [];
 
	for ( var i=0; i < 3; i++){
		arreglo.push(
			function(){
				console.log(i);
			}
		)
	}
	return arreglo;
}
 
var arr = creaFuncion(); // [f(){console.log(i)},f(){console.log(i)},f(){console.log(i)}]
 
arr[0]() // 3 sale un 3, qué esperaban ustedes??
arr[1]() // 3
arr[2]() // 3