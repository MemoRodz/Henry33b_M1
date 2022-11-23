/*
    Closures
*/
var creaFuncion1 = function(){
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

var creaFuncion2 = function(){
    var arreglo = [];
    for ( var i=0; i < 3; i++){
    // IIFE
    arreglo.push(
    (function(j){
    return function() {console.log(j);}
    }(i))
    )
    }
    return arreglo;
    }   

    function cacheFunction(cb) {
        var memoria = 0;
        return function(){
            return memoria * cb();
        }
    }
    const cb = function(x) {
        return x * 2;
      };

    const cachedFunction = cacheFunction(cb);

    console.log('Resultado:', cachedFunction(5));

var arr = creaFuncion1();
arr[0]() // 3 sale un 3, qué esperaban ustedes??
arr[1]() // 3
arr[2]() // 3

var arr = creaFuncion2();
arr[0]() // 0
arr[1]() // 1
arr[2]() // 2