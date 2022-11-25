// {{{{{{{{{{{{}}}}}}}}}}}}
function search_in_obj(obj_anid) {
  /*
    obj_anid tenes ccc NO
    tenes obj SI d
       search_in_obj(d)
    */
}
const obj_anid = {
  a: 1,
  b: 2,
  d: {
    q: 8,
    w: 9,
    t: {
      e: 2,
      ccc: ["muchaa data"],
    },
  },
};
console.log(Object.keys(obj_anid))

const obj_recursivo = {
  a: 1,
  b: 2,
};
obj_recursivo.c = obj_recursivo;
console.log(obj_recursivo.c.c.c.a);

/*
un caso base (corte (finaliza la recursión))
un caso recursivo (continúa la recursión).
*/
function myFirstRecursion(num, numBreak) {
  if (numBreak === 0) return "bye bye infinity";
  console.log(num);
  num++;
  numBreak--;
  return myFirstRecursion(num, numBreak); // 8 7 6 5 4 3 2 1 -->"bye bye infinity"
}
console.log(myFirstRecursion(1, 8));






function two_recursion(n) {
  if (n > 0) {
    console.log(n);
    return n+ two_recursion(n - 1); // 0  0 + 1   1 + 2  3 + 3
  }
  return n;
}
console.log(two_recursion(3));
/*
two_recursion(3) -> if two_recursion(2) -> two_recursion(1) -> two_recursion(0) 
                                                                X if  0

Proceso de creación
donde apila la cantidad 
de veces que
se ha invocado                  Proceso de ejecución

two_recursion(0)  0
two_recursion(1)
two_recursion(2)
two_recursion(3) 3
*/
