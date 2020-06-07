"use strict";

const random = (function () {
  return {
    color: color,
    data: data,
    numberBetween: numberBetween,
    timeData: timeData,
  };
})();

function numberBetween(min = 0, max = 10) {
  return Math.round(Math.random() * (max - min) + min);
}

function data(length = 10, min, max) {
  const data = [];
  for (let i = 0; i < length; i++) {
    data.push(numberBetween(min, max));
  }
  return data;
}

function timeData(length = 10, min, max) {
  const timeData = random.data(length, min, max);

  return timeData.map((data, index) => [Date.UTC(2020, 0, index), data]);
}

function color() {
  return `rgb(
         ${numberBetween(0, 255)},
         ${numberBetween(0, 255)},
         ${numberBetween(0, 255)})
     `;
}

module.exports = random;
