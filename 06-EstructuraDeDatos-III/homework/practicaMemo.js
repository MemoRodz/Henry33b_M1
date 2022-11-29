/*

Golf Code
(EN)
In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):


Strokes	            Return
    1	        "Hole-in-one!"
    <= par - 2	    "Eagle"
    par - 1	    "Birdie"
    par	        "Par"
    par + 1	    "Bogey"
    par + 2	    "Double Bogey"
    >= par + 3	"Go Home!"

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

(ES)
En el juego de golf, cada hoyo tiene un par, es decir, el número promedio de golpes que se espera que haga un golfista para hundir la bola en el hoyo y completar el juego. Dependiendo de qué tan por encima o por debajo del par estén sus golpes, hay un apodo diferente.

A su función se le pasarán argumentos par y trazos. Devuelve la cadena correcta de acuerdo con esta tabla que enumera los trazos en orden de prioridad; de arriba (más alto) a abajo (más bajo):

Strokes (trazos)	 Return (Devuelve)
    1	            "Hole-in-one!"
    <= par - 2	    "Eagle"
    par - 1	        "Birdie"
    par	            "Par"
    par + 1	        "Bogey"
    par + 2	        "Double Bogey"
    >= par + 3	    "Go Home!"

El par y los golpes siempre serán numéricos y positivos. Hemos agregado una matriz de todos los nombres para su conveniencia.
*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
    
  if(strokes === 1) {
    return names[0];
  }
  else if(strokes <= (par - 2)) {
    return names[1];
  }
  else if(strokes === (par - 1)) {
    return names[2];
  }
  else if(strokes === par) {
    return names[3];
  }
  else if(strokes === (par +1)) {
    return names[4];
  }
  else if(strokes === (par + 2)) {
    return names[5];
  }
  else if(strokes >= (par + 3)) {
    return names[6];
  }

  /*
  let promedio = par / strokes;
if(promedio === 1)
  {
    return names[0];
  }
  else if(promedio === (par -2))
  {
    return names[1];
  }
  else if(promedio === (par -1))
  {
    return names[2];
  }
  else if(promedio === par)
  {
    return names[3];
  }
  else if(promedio === (par +1))
  {
    return names[4];
  }
  else if(promedio === (par + 2))
  {
    return names[5];
  }
  else if(promedio >= (par + 3))
  {
    return names[4];
  }
  */
  return "Change Me";

  // Only change code above this line
}

//golfScore(5, 4);

console.log(golfScore(1, 1));
console.log(golfScore(2, 1));
console.log(golfScore(2, 3));
console.log(golfScore(7, 4));
console.log(golfScore(7, 10));
console.log(golfScore(7, 7));
console.log(golfScore(5, 4));

console.log(golfScore(4, 1));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9));

/*
Test freCodeCamp

golfScore(4, 1) should return the string Hole-in-one!
golfScore(5, 2) should return the string Eagle
golfScore(4, 3) should return the string Birdie
golfScore(4, 4) should return the string Par
golfScore(5, 5) should return the string Par
golfScore(4, 5) should return the string Bogey
golfScore(4, 6) should return the string Double Bogey
golfScore(4, 7) should return the string Go Home!
golfScore(5, 9) should return the string Go Home!
*/