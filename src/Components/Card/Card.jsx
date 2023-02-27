import React from 'react';
import './Card.css'
function Card({suit,num}) {
    return (
        <div className='card'>
            <p className={"upperSuit"}>suit:{suit}</p>
            <p className={"num"}>{num}</p>
            <p className={"downSuit"}>suit:{suit}</p>
        </div>
    );
}

export default Card;