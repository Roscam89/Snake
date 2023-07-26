"use strict";

const canvas = document.querySelector(".gameCanv");
const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");
const btnUp = document.querySelector(".up");
const btnDown = document.querySelector(".down");

let c = canvas.getContext("2d");
//Y 0-288
//x 0-146

let snakeY = 120;
let snakeX = 60;
let snakeW = 6;
let snakeH = 6;
let snakePix = 6;
let snakeSize = 4;
let snakeDirection = "right";
let foodY = Math.floor(Math.random() * 288);
let foodX = Math.floor(Math.random() * 146);
let foodS = "not present";
let gameSpeed = 150;

const snakeCoords = [snakeY, snakeX];

const snakeCoordsObj = [];

for (let i = 0; i < snakeSize; i++) {
  snakeY = snakeY + 6;
  c.fillRect(snakeY, snakeX, snakeW, snakeH);
  snakeCoords[0] = snakeY;

  let point = {
    Y: snakeY,
    X: snakeX,
  };

  snakeCoordsObj.push(point);
}

function move(Y, X) {
  let headSnake = snakeCoordsObj.slice(-1)[0];
  let tailSnake = snakeCoordsObj.slice(0)[0];

  if (headSnake.Y > 300) {
    headSnake.Y = -6;
  }

  if (headSnake.Y < -6) {
    headSnake.Y = 300;
  }

  if (headSnake.X < -6) {
    headSnake.X = 146;
  }

  if (headSnake.X > 146) {
    headSnake.X = -6;
  }

  c.fillRect(headSnake.Y + Y, headSnake.X + X, snakeW, snakeH);
  snakeCoordsObj.push({ Y: headSnake.Y + Y, X: headSnake.X + X });
  c.clearRect(tailSnake.Y, tailSnake.X, snakeW, snakeH);
  snakeCoordsObj.shift();
  // console.log(headSnake.Y);
}

function snakeMoveRight() {
  move(6, 0);
}

function snakeMoveLeft() {
  move(-6, 0);
}

function snakeMoveUp() {
  move(0, -6);
}

function snakeMoveDown() {
  move(0, 6);
}

function food() {
  let headSnake = snakeCoordsObj.slice(-1)[0];
  if (foodS === "not present") {
    foodY = Math.floor(Math.random() * 288);
    foodX = Math.floor(Math.random() * 146);
    if (foodY % 6 == 0 && foodX % 6 == 0) {
      c.fillRect(foodY, foodX, snakeW, snakeH);
      foodS = "present";
    }
  }

  if (foodY === headSnake.Y && foodX === headSnake.X) {
    foodS = "not present";
    c.fillRect(headSnake.Y + 6, headSnake.X, snakeW, snakeH);
    snakeCoordsObj.push({ Y: headSnake.Y + 6, X: headSnake.X });
  }
}

setInterval(food, 80);

addEventListener("keyup", function (e) {
  if (e.code == "ArrowUp") {
    if (snakeDirection !== "down") snakeDirection = "up";
  }

  if (e.code == "ArrowDown") {
    if (snakeDirection !== "up") snakeDirection = "down";
  }
  if (e.code == "ArrowRight") {
    if (snakeDirection !== "left") snakeDirection = "right";
  }
  if (e.code == "ArrowLeft") {
    if (snakeDirection !== "right") snakeDirection = "left";
  }
});

setInterval(function () {
  if (snakeDirection === "right") {
    snakeMoveRight();
  }
  if (snakeDirection === "left") {
    snakeMoveLeft();
  }
  if (snakeDirection === "up") {
    snakeMoveUp();
  }
  if (snakeDirection === "down") {
    snakeMoveDown();
  }
  sScore();
}, gameSpeed);

function sScore() {
  let score = snakeCoordsObj.length - 4;
  if (score > 5) {
  }
}
