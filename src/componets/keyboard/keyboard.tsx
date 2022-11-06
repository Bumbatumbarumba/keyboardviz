import React from "react";
import './keyboard.css';

export const Keyboard = () => {
    return (<div className="container">

        <div className="row zero">
            <button className="key">Esc</button>
            <button className="key">F1</button>
            <button className="key">F2</button>
            <button className="key">F3</button>
            <button className="key">F4</button>
            <button className="key">F5</button>
            <button className="key">F6</button>
            <button className="key">F7</button>
            <button className="key">F8</button>
            <button className="key">F9</button>
            <button className="key">F10</button>
            <button className="key">F11</button>
            <button className="key">F12</button>
            <button className="key">Insect</button>
            <button className="key print">printScr</button>
            <button className="key">Delete</button>
        </div>


        <div className="row one">
            <button className="key">~</button>
            <button className="key">1</button>
            <button className="key">2</button>
            <button className="key">3</button>
            <button className="key">4</button>
            <button className="key">5</button>
            <button className="key">6</button>
            <button className="key">7</button>
            <button className="key">8</button>
            <button className="key">9</button>
            <button className="key">10</button>
            <button className="key">-</button>
            <button className="key">=</button>
            <button className="key back">Backspace</button>
            <button className="key">Home</button>
        </div>


        <div className="row two">
            <button className="key tab">Tab</button>
            <button className="key">Q</button>
            <button className="key">W</button>
            <button className="key">E</button>
            <button className="key">R</button>
            <button className="key">T</button>
            <button className="key">Y</button>
            <button className="key">U</button>
            <button className="key">I</button>
            <button className="key">O</button>
            <button className="key">P</button>
            <button className="key">{"{"}</button>
            <button className="key">{"}"}</button>
            <button className="key slace">\</button>
            <button className="key">Pg Up</button>
        </div>


        <div className="row three">
            <button className="key cap">Caps Lock</button>
            <button className="key">A</button>
            <button className="key">S</button>
            <button className="key">D</button>
            <button className="key">F</button>
            <button className="key">G</button>
            <button className="key">H</button>
            <button className="key">I</button>
            <button className="key">J</button>
            <button className="key">K</button>
            <button className="key">L</button>
            <button className="key">;</button>
            <button className="key">"</button>
            <button className="key enter-btn">Enter</button>
            <button className="key">Pg Dn</button>
        </div>

        <div className="row four">
            <button className="key shift">Shift</button>
            <button className="key">Z</button>
            <button className="key">X</button>
            <button className="key">C</button>
            <button className="key">V</button>
            <button className="key">B</button>
            <button className="key">N</button>
            <button className="key">M</button>
            <button className="key"> {">"} </button>
            <button className="key">{">"}</button>
            <button className="key">?</button>
            <button className="key shift">Shift</button>
            <button className="key">↑</button>
            <button className="key">End</button>
        </div>

        <div className="row five">
            <button className="key last">Ctrl</button>
            <button className="key last">Fn</button>
            <button className="key last">Win</button>
            <button className="key last">Alt</button>
            <button className="key space">space</button>
            <button className="key last">Alt</button>
            <button className="key last">Fn</button>
            <button className="key last">Ctrl</button>
            <button className="key last">←</button>
            <button className="key last">↓</button>
            <button className="key last">→</button>
        </div>
    </div>);
};