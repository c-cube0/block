import React, { useState } from 'react';

import { Header } from './components/Header';

import { UserIcon } from './components/UserIcon';
import { Menubutton } from './components/menubutton';


import './App.css';

function App() {
  const [username, setUsername] = useState("ユーザー名");
  const [tweetcount, setTweetcount] = useState(0);
  const [userid, setUserid] = useState("@userid");
  const [headerimage, setHeaderimage] = useState("https://pbs.twimg.com/profile_banners/753535374563999746/1553342042/600x200");
  const [iconimage, setIconimage] = useState("https://pbs.twimg.com/profile_images/1109423116395012096/mKtt9EUg_200x200.jpg");

  return (
    <div className="main">
      <Header username={username} tweetcount={tweetcount} />
      <img className="headerimage" src={headerimage} alt="headerimage" />
      <div className="main-visual">
        <div className="main-messege">
          <div className="actionbutton">
            <UserIcon iconimage={iconimage} />
            {/* <img className="icon" src={iconimage} alt="iconimage" /> */}
            {/* <div className="menubutton">
              <div className="menubutton1">
                <div className="menubuttonmini"></div>
                <div className="menubuttonmini"></div>
                <div className="menubuttonmini"></div>
              </div>
            </div> */}
          </div>
          <span className="iconname">{username}</span>
          <span className="id">{userid}</span>
        </div>
      </div>
      <div className="underimage">
        <span className="undercoment">ブロックされています。</span>
        <span className="id">{userid}さんのフォローやツイートの表示はできません。</span>
        <a href="" className="link"><span>詳細はこちら</span></a>
      </div>

    </div >
  );
}

export default App;
