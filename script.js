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
let snakeX = 80;
let snakeW = 5;
let snakeH = 5;
let snakeSize = 4;
let snakeDirection = "right";

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

function snakeMoveRight() {
  if (snakeDirection !== "left") {
    snakeDirection = "right";
    let point = snakeCoordsObj.slice(-1)[0]; //head

    let remPoint = snakeCoordsObj.slice(0)[0];

    c.fillRect(point.Y + 6, point.X, snakeW, snakeH);
    snakeCoordsObj.push({ Y: point.Y + 6, X: point.X });

    c.clearRect(remPoint.Y, remPoint.X, snakeW, snakeH);
    snakeCoordsObj.shift();

    console.log(snakeCoordsObj);
  }
}

function snakeMoveLeft() {
  if (snakeDirection !== "right") {
    snakeDirection = "left";
    let pointl = snakeCoordsObj.slice(-1)[0]; //tail
    let remPointl = snakeCoordsObj.slice(0)[0];

    c.fillRect(pointl.Y - 6, pointl.X, snakeW, snakeH);
    snakeCoordsObj.push({ Y: pointl.Y - 6, X: pointl.X });

    c.clearRect(remPointl.Y, remPointl.X, snakeW, snakeH);

    snakeCoordsObj.shift();

    console.log(snakeDirection);
  }
}

function snakeMoveUp() {
  if (snakeDirection !== "down") {
    snakeDirection = "up";
    let headSnake = snakeCoordsObj.slice(-1)[0];
    let tailSnake = snakeCoordsObj.slice(0)[0];

    c.fillRect(headSnake.Y, headSnake.X - 6, snakeW, snakeH);

    snakeCoordsObj.push({ Y: headSnake.Y, X: headSnake.X - 6 });
    snakeCoordsObj.shift();

    c.clearRect(tailSnake.Y, tailSnake.X, snakeW, snakeH);

    console.log(snakeDirection);
  }
}

function snakeMoveDown() {
  if (snakeDirection !== "up") {
    snakeDirection = "down";
    let headSnake = snakeCoordsObj.slice(-1)[0];
    let tailSnake = snakeCoordsObj.slice(0)[0];

    c.fillRect(headSnake.Y, headSnake.X + 6, snakeW, snakeH);
    snakeCoordsObj.push({ Y: headSnake.Y, X: headSnake.X + 6 });
    snakeCoordsObj.shift();

    c.clearRect(tailSnake.Y, tailSnake.X, snakeW, snakeH);
    console.log(snakeDirection);
  }
}

function food() {
  //fillStyle = "rgb(255,0,0)";
  c.fillRect(100, 62, snakeW, snakeH);
}

console.log(snakeCoordsObj, snakeDirection);
btnRight.addEventListener("click", snakeMoveRight);
btnLeft.addEventListener("click", snakeMoveLeft);
btnUp.addEventListener("click", snakeMoveUp);
btnDown.addEventListener("click", snakeMoveDown);

addEventListener("keyup", function (e) {
  if (e.code == "ArrowUp") {
    snakeMoveUp();
  }

  if (e.code == "ArrowDown") {
    snakeMoveDown();
  }
  if (e.code == "ArrowRight") {
    snakeMoveRight();
  }
  if (e.code == "ArrowLeft") {
    snakeMoveLeft();
  }
});

food();

/*function snakeMoveLeft() {
  if (snakeDirection !== "right") {
    snakeDirection = "left";
    let pointl = snakeCoordsObj.slice(0)[0]; //tail
    let remPointl = snakeCoordsObj.slice(-1)[0];

    c.fillRect(pointl.Y - 6, pointl.X, snakeW, snakeH);
    snakeCoordsObj.unshift({ Y: pointl.Y - 6, X: pointl.X });

    c.clearRect(remPointl.Y, remPointl.X, snakeW, snakeH);

    snakeCoordsObj.pop();

    console.log(snakeDirection);
  }
}*/
