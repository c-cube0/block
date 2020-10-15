import React from 'react';
import './userIcon.css';

function UserIcon({ iconimage }) {
    return (
        <img className="icon" src={iconimage} alt="iconimage" />
    )
}
export { UserIcon };