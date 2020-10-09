import React from 'react';
import './App.css';
import imaje from './headerimaje.jpeg';
import aicon from './aicon-imaje.jpg'
function App() {
  return (
    <div class="main">
      <div class="main-header">
        <span class="usearname">しょうた × エンジニア</span>
        <span class="caunt">1,149件のツイート</span>
      </div>

      <img className="headerimaje" src={imaje} alt="headerimaje" />
      <div class="main-visual">
      </div>
      <img className="aicon" src={aicon} alt="aicon" />

      <div class="main-messege">
        <span class="usearname">しょうた × エンジニア</span>
        <span class="id">@shota1995m</span>
      </div>

    </div>
  );
}

export default App;
