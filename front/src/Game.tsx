import React, { useEffect } from 'react';
import './index.css';
import { Ball, createBall } from './Ball';
import { Player } from './Player';
import Prepare from "./Prepare"
import Update from './Update';

function  getReverse(color: string): string
{
  var reverseColor: string;
  color = color.substring(1);
  reverseColor = (Number(`0x1${color}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
  return ("#" + reverseColor);
}

export default function Game({personColor, aiColor, ballColor, initSpeed, maxSpeed, aiLevel, backGround}: any) {
  useEffect(() =>
  {
    const FPS = 60;
    console.log(backGround);
    const randomOption = "/background/" + backGround.toString() + ".jpg";
    const image = new Image();
    image.src = randomOption;
    const canvas = document.getElementById('pong') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    let   ball: Ball = createBall(canvas, ballColor, getReverse(ballColor), maxSpeed);
    let player1: Player = {
      width: canvas.width - ((99 * canvas.width) / 100),
      height: canvas.height - ((80 * canvas.height) / 100),
      x: 2,
      y: canvas.height - ((60 * canvas.height) / 100),
      color: personColor,
      reverseColor: getReverse(personColor),
      score: 0,
      ai: 0,
      aiStep: 0
    };
    let player2: Player = {
      width: canvas.width - ((99 * canvas.width) / 100),
      height: canvas.height - ((80 * canvas.height) / 100),
      x: canvas.width - ((1 * canvas.width) / 100) - 2,
      y: canvas.height - ((60 * canvas.height) / 100),
      color: aiColor,
      reverseColor: getReverse(aiColor),
      score: 0,
      ai: aiLevel * aiLevel,//ai level from 1 to 20
      aiStep: 1.5
    };
    canvas.addEventListener("mousemove", (event : MouseEvent) => 
    {
      let y = (event.clientY - canvas.offsetTop) / canvas.offsetHeight * 100;
      y = y * canvas.height / 100;
      player1.y = y - player1.height / 2;
      if (player1.y < 0)
        player1.y = 2;
      else if (player1.y > canvas.height - player1.height)
        player1.y = canvas.height - player1.height - 2;
    });
    setInterval(()=> Prepare(canvas, ctx, ball, player1, player2, image), 1000 / FPS);
    setInterval(()=> Update(canvas, ctx, ball, player1, player2), initSpeed + 4);
  }, []);
  return (
    <center>
      <div className="game-container">
        <canvas id="pong" width="1920" height="1280"></canvas>
      </div>
    </center>
  )
}
