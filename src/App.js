import React from 'react';
import './App.css';
import image from './headerimage.jpeg';
import icon from './icon-image.jpg';
import Arrow from './Arrow.svg';

function App() {
  return (
    <div class="main">
      <div class="main-header">
        <div class="headerbackclick">
          <img src={Arrow} alt="icon" class="backclick" />
        </div>
        <div class="usearnamecaunt">
          <span class="usearname">しょうた × エンジニア</span>
          <span class="caunt">1,149件のツイート</span>
        </div>
      </div>

      <img className="headerimage" src={image} alt="headerimage" />
      <div class="main-visual">
        <div class="main-messege">
          <div class="actionbutton">
            <img className="icon" src={icon} alt="icon" />
            <div class="menubutton">
              <div class="menubutton1">
                <div class="menubuttonmini"></div>
                <div class="menubuttonmini"></div>
                <div class="menubuttonmini"></div>
              </div>
            </div>
          </div>
          <span class="iconname">しょうた × エンジニア</span>
          <span class="id">@shota1995m</span>
        </div>
      </div>
      <div class="underimage">
        <span class="undercoment">ブロックされています。</span>
        <span class="id">@shota1995mさんのフォローやツイートの表示はできません。</span>
        <a href="" className="link"><span>詳細はこちら</span></a>
      </div>
    </div >
  );
}

export default App;
