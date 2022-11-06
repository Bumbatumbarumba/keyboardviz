import Slider from '@mui/material/Slider';
import React, { useState } from 'react';
import { Keyboard } from './componets/keyboard/keyboard';
import './App.css';

var mySetInterval: NodeJS.Timeout | undefined;

function startInterval(cps: number) {
  const buttons = document.getElementsByClassName("key");
  return setInterval(async () => {
    const keySelected = Math.floor(Math.random() * (buttons.length - 1));
    buttons[keySelected].classList.add("clicked");
    await new Promise(r => setTimeout(r, 100));
    buttons[keySelected].classList.remove("clicked");
  }, 1000 / cps);
}

function stopFunc() {
  clearInterval(mySetInterval);
}

function App() {
  const [cps, setCps] = useState(1);
  const [playDisabled, setPlayDisabled] = useState(false);

  const handleSliderChange = (e: any, val: any) => {
    setCps(val);
  };

  return (
    <>
      <div className="menu">
        <h1>Characters Per Second Visualizer</h1>
        <p>Characters per second: {cps}</p>
        <p>Words per second: {Math.floor(cps / 5).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <p>Words per minute: {Math.floor(cps / 5 * 60).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <Slider
          valueLabelDisplay='auto'
          min={1}
          max={1000}
          onChange={handleSliderChange}
          disabled={playDisabled}
        ></Slider>
        <button disabled={playDisabled} onClick={() => {
          setPlayDisabled(true);
          mySetInterval = startInterval(cps);
          console.log(mySetInterval);
        }}>play</button>
        <button disabled={!playDisabled} onClick={() => {
          setPlayDisabled(false);
          stopFunc();
        }}>stop</button>
        <p>According to exactly one google search
          (<a href='https://www.wolframalpha.com/input?i=average+english+word+length' target={"_blank"} rel="noreferrer">link</a>),
          the average length of an english word is about 5 characters long. Based on this, we can get the words per second, and then
          the words per minute. Credit for the keyboard is this talented individual <a href='https://codepen.io/TANYA182001/pen/PoprajQ' target={"_blank"} rel="noreferrer">here</a>.
        </p>
      </div>
      <Keyboard />
    </>
  );
}

export default App;
