'use strict'

const random = (function () {
   return {
      numberBetween: numberBetween,
      data: data,
      color: color
     }
 })();

function numberBetween(min = 0, max = 10) {
   return Math.round(Math.random() * (max - min) + min);
};

function data(length = 10, min, max ) {
   const data = [];
   for (let i = 0; i < length; i++) {
      data.push(numberBetween(min, max));
   }
}; 

function color() {
   return `rgb(
         ${numberBetween(0, 255)},
         ${numberBetween(0, 255)},
         ${numberBetween(0, 255)})
     `;
 };
