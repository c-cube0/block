import React from 'react';
import './Underimage.css';

function Underimage({ userid }) {
    return (
        <div className="underimage">
            <span className="undercoment">ブロックされています。</span>
            <span className="id">{userid}さんのフォローやツイートの表示はできません。</span>
            <a href="" className="link"><span>詳細はこちら</span></a>
        </div>
    )
}
export { Underimage };