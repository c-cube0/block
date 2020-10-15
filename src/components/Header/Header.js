import React from 'react';
import Arrow from '../../Arrow.svg';

import './Header.css';

function Header({ username, tweetcount }) {
    return (
        <div class="main-header">
            <div class="headerbackclick">
                <img src={Arrow} alt="icon" class="backclick" />
            </div>
            <div class="usearnamecount">
                <span class="username">{username}</span>
                <span class="count">{tweetcount}</span>
            </div>
        </div>
    )
}

export { Header };