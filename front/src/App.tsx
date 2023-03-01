import React, { useState } from 'react';
import './index.css';
import Home from './Home';
import Game from './Game'


function App() {
  const [show, gameShow] = useState(false);
  const [colorAi, setAiColor] = useState("#FFFFFF");
  const [colorPerson, setPersonColor] = useState("#FFFFFF");
  const [colorBall, setBallColor] = useState("#000000");
  const [initSpeed, setInitSpeed] = useState(6);
  const [maxSpeed, setMaxSpeed] = useState(20);
  const [aiLevel, setAiLevel] = useState(20);
  const [backGround, setBackGround] = useState(0);
  const handleShow = (a: boolean, pc: string, ac: string, bc: string, si: string, sm: string, al: number, bg: number) => 
  {
    gameShow(a);
    setPersonColor(pc);
    setAiColor(ac);
    setBallColor(bc);
    setInitSpeed(parseInt(si));
    setMaxSpeed(parseInt(sm));
    setAiLevel(al);
    setBackGround(bg);
  }
  return (
    <>
      {show === false && <Home onAccept={handleShow}/>}
      {show === true && <Game personColor={colorPerson} aiColor={colorAi} ballColor={colorBall} initSpeed={(100 - initSpeed) / 10} maxSpeed={maxSpeed / 3} aiLevel={aiLevel} backGround={backGround}/>}
    </>
  );
}

export default App;
