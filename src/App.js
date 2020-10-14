import React, { useState } from 'react';
import './App.css';
import Arrow from './Arrow.svg';

function App() {
  const [username, setUsername] = useState("ユーザー名");
  const [tweetcount, setTweetcount] = useState(0);
  const [userid, setUserid] = useState("@userid");
  const [headerimage, setHeaderimage] = useState("https://pbs.twimg.com/profile_banners/753535374563999746/1553342042/600x200");
  const [iconimage, setIconimage] = useState("https://pbs.twimg.com/profile_images/1109423116395012096/mKtt9EUg_200x200.jpg");

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
      <img className="headerimage" src={headerimage} alt="headerimage" />
      <div class="main-visual">
        <div class="main-messege">
          <div class="actionbutton">
            <img className="icon" src={iconimage} alt="iconimage" />
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
