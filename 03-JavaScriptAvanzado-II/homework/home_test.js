// // # Homework JavaScript Avanzado I

// // ## Scope & Hoisting

// // Determiná que será impreso en la consola, sin ejecutar el código.

// // > Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.


// x = 1;
// var a = 5;
// var b = 10;
// var c = function (a, b, c) {
//    var x = 10;
//    console.log(x); // 10 
//    console.log(a); // 8
//    var f = function (a, b, c) {
//       b = a;
//       console.log(b); // 8
//       b = c;
//       var x = 5;
//    };
//    f(a, b, c);
//    console.log(b);//  9
// };
// c(8, 9, 10);
// console.log(b); // 10 
// console.log(x); // 1



// console.log(bar); // undefined
// // console.log(baz); // error -> baz is not defined
// foo();
// function foo() {
//    console.log('Hola!');
// }
// var bar = 1;
// baz = 2;



// var instructor = 'Tony';

// if (true) {
//    instructor = 'Franco'; // instructor = 'Franco'
// }
// console.log(instructor); // Tony 



// var instructor = 'Tony';
// console.log(instructor); // Tony
// (function () {
//    if (true) {
//       var instructor = 'Franco';
//       console.log(instructor); // Franco
//    }
// })();
// console.log(instructor); // Tony



// var instructor = 'Tony';
// let pm = 'Franco';
// if (true) {
//    instructor = 'The Flash' // <- var instructor = 'The Flash';
//    let pm = 'Reverse Flash';
//    console.log(instructor); // The Flash
//    console.log(pm); // 'Reverse Flash'
// }
// console.log(instructor); // The Flash
// console.log(pm); // 'Franco'


// // ### Coerción de Datos

// // ¿Cuál crees que será el resultado de la ejecución de estas operaciones?:


// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// 7 / 0
// {}[0]
// parseInt("09")
// 5 && 2
// 2 && 5
// 5 || 0
// 0 || 5
// [3]+[3]-[10]
// 3>2>1
// // [] == ![]


// // > Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

// // ### Hoisting

// // ¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:


// function test() {
//    console.log(a); // undefined
//    console.log(foo()); // 2

//    var a = 1;
//    function foo() {
//       return 2;
//    }
// }

// test();


// // Y el de este código? :


var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      let snack = 'Friskies';
      return snack;
   }
   return snack;
}

console.log(getFood(false)); // Meow Mix


// // ### This

// // ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

// var fullname = 'Juan Perez';
// var obj = {
//    fullname: 'Natalia Nerea',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function () {
//          return this.fullname;
//       },
//    },
// };

// console.log(obj.prop.getFullname()); // 'Aurelio De Rosa'

// var test = obj.prop.getFullname; // function () {return this.fullname;},

// console.log(test()); // undefined


// // ### Event loop

// // Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?


function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 2000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();

