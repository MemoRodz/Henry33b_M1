/*
Copia del código del archivo Homework.md
*/

x = 1;
let a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);
   console.log(a);
   var f = function (a, b, c) {
      b = a;
      console.log(b);
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);

console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
var baz = 2;    //Se agrego 'var' para que tuviera contexto en el código

var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);

var instructor = 'Tony';
console.log(instructor);
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);
   }
})();
console.log(instructor);

var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);
   console.log(pm);
}
console.log(instructor);
console.log(pm);

/*
    Coerción de datos
*/
6 / "3";   //    2
console.log(6 / "3");
"2" * "3";     //  6
console.log("2" * "3");
4 + 5 + "px";  //  '9px'
console.log(4 + 5 + "px");
"$" + 4 + 5;   //  '$45'
console.log("$" + 4 + 5);
"4" - 2;   //  2
console.log("4" - 2);
"4px" - 2; //  NaN
console.log("4px" - 2);
7 / 0; //  Infinity
console.log(7 / 0);
{}[0]; //  undefined
console.log({}[0]);
parseInt("09"); //  9
console.log(parseInt("09"));
5 && 2; //  2
console.log(5 && 2);
2 && 5; //  5
console.log(2 && 5);
5 || 0; //  5
console.log(5 || 0);
0 || 5; //  5
console.log(0 || 5);
[3]+[3]-[10]; //  23
console.log([3]+[3]-[10]);
3>2>1; //  false
console.log(3>2>1);
[] ==! []; //  true
console.log([] ==! []);
/* 

Hosting

*/
console.log('* * * *  Hosting  * * * *');

function test() {
    console.log(a);
    console.log(foo());
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();
 console.log(test());

 var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
console.log(getFood(false));

/*
    This
    ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:
*/
console.log('* * * *  This  * * * *');

var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

//La primer llamada a la consola es "Aurelio De Rosa" porque se llama al método directamente, 
//la segunda llamada es indefinida pues no se está llamando a la función adecuadamente.

/*

        Event Loop
        Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

*/
console.log('* * * *  Event Loop  * * * *');
function printing() {
    console.log(1);
    setTimeout(function () {
       console.log(2);
    }, 1000);
    setTimeout(function () {
       console.log(3);
    }, 0);
    console.log(4);
 }
 
 printing();
 //La Funcion "setTimeout" se establece en 1,000 milisegundos para lanzar a consola 2 y en 0 milisegundos para lanzar 3 esto provoca que se lance primero el 3 antes que el 2;
 //sin embargo, se lanza a la consola 4 antes que los anteriores porque no tiene asignado ningún retraso en el proceso.

 /*
    Manejo de errores
 */

    console.log('Manejo de errores');

function lastElement(array) {
    if (array.length > 0)
      return array[array.length - 1];
    else
      throw "No existe el último elemento de un arreglo vacío.";
  }
  
  function lastElementPlusTen(array) {
    return lastElement(array) + 10;
  }
  
  try {
    //print(lastElementPlusTen([]));
    console.log(lastElementPlusTen([]));
  }
  catch (error) {
    //print("Hubo un problema ", error);
    console.log("Hubo un problema:", error);
  }

//
try {
    console.log(hola);
  }catch (error) {
    console.log("Atrapado: " + error.message);
  }