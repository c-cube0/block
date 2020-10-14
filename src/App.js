import React, { useState } from 'react';
import './App.css';
import image from './headerimage.jpeg';
import icon from './icon-image.jpg';
import Arrow from './Arrow.svg';

function App() {
  const [username, setUsername] = useState("ユーザー名");
  const [tweetcount, setTweetcount] = useState(0);
  const [userid, setUserid] = useState("@userid");
  return (

    <div class="main">

      <div class="main-header">
        <div class="headerbackclick">
          <img src={Arrow} alt="icon" class="backclick" />
        </div>
        <div class="usearnamecaunt">
          <span class="usearname">{username}</span>
          <span class="caunt">{tweetcount}</span>
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
          <span class="iconname">{username}</span>
          <span class="id">{userid}</span>
        </div>
      </div>
      <div class="underimage">
        <span class="undercoment">ブロックされています。</span>
        <span class="id">{userid}さんのフォローやツイートの表示はできません。</span>
        <a href="" className="link"><span>詳細はこちら</span></a>
      </div>

    </div >
  );
}

export default App;
