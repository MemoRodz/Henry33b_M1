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
   const numeroBits = 3;
   const bitAbit = [0];

   for (let i = 0; i < numeroBits; i++) {
       let mascara = 1;
   
       const bit = num & (mascara << i);   
   
       if(bit === 0) {
           bitAbit[i] = 0;
       } else {
           bitAbit[i] = 1;
       }
   }
   
   return respuesta = bitAbit.reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
