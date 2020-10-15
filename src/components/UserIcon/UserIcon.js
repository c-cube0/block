import React from 'react';
import './UserIcon.css';

function UserIcon({ iconimage, username }) {
    return (
        <img className="user-icon" src={iconimage} alt={`${username}のアイコン画像`} />
    )
}
export { UserIcon };