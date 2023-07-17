"use strict";

const canvas = document.querySelector(".gameCanv");
const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");
const btnUp = document.querySelector(".up");
const btnDown = document.querySelector(".down");

let c = canvas.getContext("2d");
let snakeY = 120;
let snakeX = 80;
let snakeW = 5;
let snakeH = 5;
let snakeSize = 4;

const snakeCoords = [snakeY, snakeX];

const snakeCoordsObj = {};
//snakeCoords.push(snakeCoords[0]);
//snakeCoords.pop();
//snakeCoords.push(snakeCoords[1]);
//snakeCoords.pop();

for (let i = 0; i < snakeSize; i++) {
  // [snakeY, snakeX] = snakeCoords;
  snakeY = snakeY + 6;
  snakeCoords[0] = snakeY;
  c.fillRect(snakeCoords[0], snakeX, snakeW, snakeH);
  console.log(snakeY);
}
// c.fillRect(snakeCoords[0], snakeX - 6, snakeW, snakeH);
// c.clearRect(126, 80, snakeW, snakeH);
// c.clearRect(132, 80, snakeW, snakeH);
// c.fillRect(snakeCoords[0], snakeX - 12, snakeW, snakeH);

function snakeMoveRight() {
  snakeY = snakeY + 6;
  snakeCoords[0] = snakeY;
  c.fillRect(snakeCoords[0], snakeX, snakeW, snakeH);
  c.clearRect(snakeCoords[0] - 6 * snakeSize, snakeX, snakeW, snakeH);
  console.log(snakeCoords);
}

function snakeMoveLeft() {
  snakeY = snakeY - 6;
  snakeCoords[0] = snakeY;
  c.clearRect(snakeCoords[0] + 6 * 1, snakeX, snakeW, snakeH);
  c.fillRect(snakeCoords[0] - 6 * (snakeSize - 1), snakeX, snakeW, snakeH);

  console.log(snakeCoords);
}

function snakeMoveUp() {
  //snakeY = snakeY - 18;
  //snakeX = snakeX - 6;
  // snakeCoords[0] = snakeY;
  // snakeCoords[1] = snakeX;

  c.fillRect(snakeY, snakeCoords[1], snakeW, snakeH);
  c.clearRect(snakeY + 6, snakeCoords[1], snakeW, snakeH);

  // c.clearRect(snakeCoords[0], snakeCoords[1] + 6 * snakeSize, snakeW, snakeH);
  // c.clearRect(snakeCoords[0] - 6 * 3, snakeX, snakeW, snakeH);

  console.log(snakeY);
}

function snakeMoveDown() {
  snakeX = snakeX + 6;
  snakeCoords[1] = snakeX;
  c.fillRect(snakeCoords[0], snakeCoords[1], snakeW, snakeH);
  console.log(snakeCoords);
}

btnRight.addEventListener("click", snakeMoveRight);
btnLeft.addEventListener("click", snakeMoveLeft);
btnUp.addEventListener("click", snakeMoveUp);
btnDown.addEventListener("click", snakeMoveDown);
console.log(snakeCoords);

// let n = 0;

// function add5() {
//   n = n + 5;
//   console.log(n);
// }
