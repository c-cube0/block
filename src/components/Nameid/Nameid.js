import React from 'react';
import './Nameid.css';

function Nameid({ username, userid }) {
    return (
        <>
            <span className="iconname">{username}</span>
            <span className="id">{userid}</span>
        </>
    )
}
export { Nameid };