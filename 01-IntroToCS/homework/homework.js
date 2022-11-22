'use strict';

function BinarioADecimal(num) {
   let respuesta = 0;
   for(let i = 0; i < num.length; i++)
   {
      respuesta += +num[i] * 2 ** (num.length - 1 - i);
   }
   return respuesta;
}

function DecimalABinario(num) {
   let respuesta = '';
   const numeroBits = 3;   //'111' ==> num.length
   const bitAbit = [0];

   for (let i = 0; i < numeroBits; i++) {
       let mascara = 1;
   
       const bit = num & (mascara << i);   // <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
   
       if(bit === 0) {
           bitAbit[i] = 0;
       } else {
           bitAbit[i] = 1;  // bitAbit[i] = bit;
       }
   }
   
   return respuesta = bitAbit.reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
