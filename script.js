"use strict";

const canvas = document.querySelector(".gameCanv");
const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");
const btnUp = document.querySelector(".up");
const btnDown = document.querySelector(".down");

let c = canvas.getContext("2d");
const cWidth = 2080;
const cHeight = 1000;
c.canvas.width = cWidth;
c.canvas.height = cHeight;

let snakeY = 1000;
let snakeX = 500;
let snakePix = 40;
let snakeW = snakePix;
let snakeH = snakePix;
let snakeSize = 4;
let snakeDirection = "right";
let foodS = "not present";
let gameSpeed = 150;

//console.log(window.outerHeight, outerWidth);

const snakeCoords = [snakeY, snakeX];
const foodLocation = [];

const snakeCoordsObj = [];

for (let i = 0; i < snakeSize; i++) {
  snakeY = snakeY + snakePix;
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

  if (headSnake.Y > cWidth) {
    headSnake.Y = -snakePix;
  } else if (headSnake.Y < -snakePix) {
    headSnake.Y = cWidth;
  }

  if (headSnake.X < -snakePix) {
    headSnake.X = cHeight;
  } else if (headSnake.X >= cHeight) {
    headSnake.X = -snakePix;
  }

  c.fillRect(headSnake.Y + Y, headSnake.X + X, snakeW, snakeH);
  snakeCoordsObj.push({ Y: headSnake.Y + Y, X: headSnake.X + X });
  c.clearRect(tailSnake.Y, tailSnake.X, snakeW, snakeH);
  snakeCoordsObj.shift();
}

function snakeMoveRight() {
  move(snakePix, 0);
}

function snakeMoveLeft() {
  move(-snakePix, 0);
}

function snakeMoveUp() {
  move(0, -snakePix);
}

function snakeMoveDown() {
  move(0, snakePix);
}

function snakeGrow() {
  let headSnake = snakeCoordsObj.slice(-1)[0];
  if (foodLocation[0] === headSnake.Y && foodLocation[1] === headSnake.X) {
    c.fillRect(headSnake.Y + snakePix, headSnake.X, snakeW, snakeH);
    snakeCoordsObj.push({ Y: headSnake.Y + snakePix, X: headSnake.X });
    foodS = "not present";
    c.fillStyle = "red";
  }
}

function food() {
  if (foodS === "not present") {
    let foodY =
      Math.round((Math.random() * (cWidth - snakePix) + snakePix) / snakePix) *
      snakePix;
    let foodX =
      Math.round((Math.random() * (cHeight - snakePix) + snakePix) / snakePix) *
      snakePix;

    c.fillRect(foodY, foodX, snakeW, snakeH);
    foodS = "present";

    foodLocation.push(foodY, foodX);

    // console.log(foodY, foodX);
  }
  snakeGrow();
}

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

  food();

  // console.log(snakeCoordsObj);
}, gameSpeed);
